let uploadedExcelData = []
      let sampleCount = 3

      function escapeHtml(value) {
        return String(value).replace(/[&<>"']/g, (character) => ({
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#39;',
        }[character]))
      }
      function handleExcelUpload(event) {
        const file = event.target.files[0]
        if (!file) return

        const reader = new FileReader()
        reader.onload = function (e) {
          try {
            const data = new Uint8Array(e.target.result)
            const workbook = XLSX.read(data, { type: 'array' })
            const firstSheetName = workbook.SheetNames[0]
            const worksheet = workbook.Sheets[firstSheetName]

            // Format ke JSON object
            const rawJson = XLSX.utils.sheet_to_json(worksheet, { defval: '' })

            // Normalisasi Nama Header/Kolom untuk mengatasi spasi tak terlihat
            uploadedExcelData = rawJson.map((row) => {
              const newRow = {}
              Object.keys(row).forEach((key) => {
                const cleanKey = key.trim()
                newRow[cleanKey] = row[key]
              })
              return newRow
            })

            document.getElementById('excelStatus').innerHTML =
              `<span class="text-emerald-400 font-bold"><i class="fa-solid fa-circle-check"></i> ${escapeHtml(file.name)}</span> (${uploadedExcelData.length} sampel)`
            alert(
              `Berhasil memuat dataset Excel dengan ${uploadedExcelData.length} data sampel.`,
            )
          } catch (err) {
            console.error(err)
            alert('Gagal membaca file Excel. Pastikan format file sesuai.')
          }
        }
        reader.readAsArrayBuffer(file)
      }

      // Format tanggal Excel ke YYYY-MM-DD
      function parseExcelDate(val) {
        if (!val) return ''
        if (typeof val === 'number') {
          const dateObj = XLSX.SSF.parse_date_code(val)
          if (dateObj) {
            const y = dateObj.y
            const m = String(dateObj.m).padStart(2, '0')
            const d = String(dateObj.d).padStart(2, '0')
            return `${y}-${m}-${d}`
          }
        }
        const str = String(val).trim()
        if (str.match(/^\d{4}-\d{2}-\d{2}$/)) return str

        const parsedDate = new Date(str)
        if (!isNaN(parsedDate.getTime())) {
          return parsedDate.toLocaleDateString('en-CA', {
            timeZone: 'Asia/Jakarta',
          })
        }
        return str
      }

      // Fungsi Pembacaan Data Excel Berdasarkan Nomor Sampel ke Form
      function loadDataByNoSampel(targetKey) {
        if (!uploadedExcelData || uploadedExcelData.length === 0) {
          alert('Silakan upload file Excel survey terlebih dahulu!')
          return
        }

        const inputEl = document.getElementById(`searchNoSampel_${targetKey}`)
        if (!inputEl || !inputEl.value) {
          alert('Masukkan nomor sampel yang ingin dicari!')
          return
        }

        const searchNo = parseInt(inputEl.value)
        const matchedRow = uploadedExcelData.find(
          (r) => parseInt(r['Nomor Sampel']) === searchNo,
        )

        if (!matchedRow) {
          alert(
            `Data dengan Nomor Sampel ${searchNo} tidak ditemukan pada dataset Excel.`,
          )
          return
        }

        // Auto Populate Form sesui Mappings
        const setVal = (id, value) => {
          const el = document.getElementById(id)
          if (el) el.value = value !== undefined && value !== null ? value : ''
        }

        const setValFormatted = (id, value) => {
          const el = document.getElementById(id)
          if (el) {
            const numVal = parseFloat(value) || 0
            el.value =
              numVal > 0 ? new Intl.NumberFormat('id-ID').format(numVal) : '0'
          }
        }

        // 1. Jenis Objek
        const jenisObjekVal = String(
          matchedRow['Bangunan (B)/Ruko(R)/ Tanah Kosong (TK)'] || '',
        ).trim()
        setVal(`jenisObjek_${targetKey}`, jenisObjekVal)
        if (targetKey === 'single') {
          toggleBangunanSingle()
        } else {
          toggleBangunan(targetKey)
        }

        // 2. Status Hak
        setVal(
          `statusKepemilikan_${targetKey}`,
          String(matchedRow['Status Kepemilikan'] || '').trim(),
        )

        // 3. Jenis Data
        setVal(
          `jenisData_${targetKey}`,
          String(matchedRow['Jenis Data'] || '').trim(),
        )

        // 4. Tanggal Transaksi
        const rawDate = matchedRow['Tanggal Penawaran/ Transaksi']
        setVal(`tanggalTransaksi_${targetKey}`, parseExcelDate(rawDate))

        // 5. Harga (Rp)
        setValFormatted(
          `hargaAwal_${targetKey}`,
          matchedRow['Harga Penawaran/ Transaksi (Rp.)'],
        )

        // 6. Luas Tanah (m2)
        setValFormatted(`luasTanah_${targetKey}`, matchedRow['Luas tanah (m2)'])

        // 7. Luas Bangunan
        setValFormatted(
          `luasBangunan_${targetKey}`,
          matchedRow['Luas Bangunan'],
        )

        // 8. Biaya Per m2 Bangunan
        setValFormatted(
          `biayaBangunanPerM2_${targetKey}`,
          matchedRow['Biaya Per m2 bangunan'],
        )

        // 9. Tahun Buat / Renovasi
        setVal(`tahunPembuatan_${targetKey}`, matchedRow['Tahun Pembuatan'])
        setVal(`tahunRenovasi_${targetKey}`, matchedRow['Tahun Renovasi'])

        // 10. Kondisi Fisik
        setVal(
          `kondisiFisik_${targetKey}`,
          String(matchedRow['Keadaan Fisik Umumnya'] || '').trim(),
        )
      }

      function formatThousandInput(input) {
        let value = input.value.replace(/\D/g, '')
        if (value) {
          input.value = new Intl.NumberFormat('id-ID').format(value)
        } else {
          input.value = ''
        }
      }

      function parseInputValue(id) {
        const val = document.getElementById(id).value.replace(/\./g, '')
        return parseFloat(val) || 0
      }

      function switchTab(index) {
        document.querySelectorAll('[id^="formSampel_"]').forEach((form) => {
          form.classList.toggle('hidden', form.id !== `formSampel_${index}`)
        })

        document.querySelectorAll('[id^="tabBtn_"]').forEach((button) => {
          const isActive = button.id === `tabBtn_${index}`
          button.className = isActive
            ? 'flex-1 min-w-[90px] py-2.5 text-xs font-bold rounded-xl transition-all duration-200 bg-[#1f1a30] text-[#ffffff] shadow-sm flex items-center justify-center gap-1.5 cursor-pointer hover:bg-[#373153]'
            : 'flex-1 min-w-[90px] py-2.5 text-xs font-bold rounded-xl transition-all duration-200 text-[#d0cde1] hover:bg-[#373153]/60 flex items-center justify-center gap-1.5 cursor-pointer'
        })
      }

      function addSample() {
        const index = ++sampleCount
        const sourceForm = document.getElementById('formSampel_3')
        const newForm = sourceForm.cloneNode(true)
        newForm.innerHTML = newForm.innerHTML
          .replace(/_3\b/g, `_${index}`)
          .replace(/\(3\)/g, `(${index})`)
          .replace(/Sampel 3/g, `Sampel ${index}`)
        newForm.id = `formSampel_${index}`
        newForm.classList.add('hidden')
        newForm.querySelectorAll('input').forEach((input) => {
          input.value =
            input.type === 'date'
              ? new Date().toLocaleDateString('en-CA', {
                  timeZone: 'Asia/Jakarta',
                })
              : ''
        })
        newForm.querySelectorAll('select').forEach((select) => {
          const defaultOption = Array.from(select.options).find(
            (option) => option.defaultSelected,
          )
          select.selectedIndex = defaultOption
            ? defaultOption.index
            : 0
        })
        sourceForm.parentElement.appendChild(newForm)

        const tab = document.createElement('button')
        tab.id = `tabBtn_${index}`
        tab.type = 'button'
        tab.className =
          'flex-1 min-w-[90px] py-2.5 text-xs font-bold rounded-xl transition-all duration-200 text-[#d0cde1] hover:bg-[#373153]/60 flex items-center justify-center gap-1.5 cursor-pointer'
        tab.innerHTML = `<i class="fa-solid fa-map-pin text-[10px]"></i> Sampel ${index}`
        tab.setAttribute('onclick', `switchTab(${index})`)
        document.getElementById('sampleTabList').appendChild(tab)

        addSampleResultRow(index)
        updateDeleteButtons()
        const enteredCount = Array.from(
          { length: sampleCount },
          (_, sampleIndex) =>
            parseInputValue(`luasTanah_${sampleIndex + 1}`) > 0,
        ).filter(Boolean).length
        document.getElementById('sampleCountText').textContent =
          `Hasil gabungan ${enteredCount} titik sampel`
        switchTab(index)
      }

      function addSampleResultRow(index) {
        const colors = ['indigo', 'purple', 'violet', 'blue', 'emerald', 'pink']
        const color = colors[(index - 1) % colors.length]
        const row = document.createElement('div')
        row.dataset.sampleResult = index
        row.className =
          'flex justify-between items-center hover:bg-[#1f1a30]/40 p-1 rounded transition-colors'
        row.innerHTML = `
          <span data-sample-label class="text-[#d0cde1] flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-${color}-400 inline-block"></span>
            Sampel ${index}:
          </span>
          <div class="text-right">
            <div id="resVal${index}" class="font-bold text-[#ffffff]">Rp 0 / m²</div>
            <div id="resWaktu${index}" class="text-[10px] text-[#d0cde1]/70">Penyesuaian Waktu: 0.00%</div>
          </div>`
        document.getElementById('sampleResults').appendChild(row)
      }

      function updateDeleteButtons() {
        document.querySelectorAll('.deleteSampleBtn').forEach((button) => {
          button.classList.toggle('hidden', sampleCount <= 3)
          button.classList.toggle('flex', sampleCount > 3)
        })
      }

      function removeSample(index) {
        if (sampleCount <= 3) return

        const activeForm = Array.from(
          document.querySelectorAll('[id^="formSampel_"]'),
        ).find((form) => !form.classList.contains('hidden'))
        const activeIndex = activeForm
          ? Number(activeForm.id.split('_').pop())
          : 1

        document.getElementById(`formSampel_${index}`)?.remove()
        document.getElementById(`tabBtn_${index}`)?.remove()
        document
          .querySelector(`[data-sample-result="${index}"]`)
          ?.remove()

        const forms = Array.from(
          document.querySelectorAll('[id^="formSampel_"]'),
        )
        sampleCount = forms.length

        forms.forEach((form, formPosition) => {
          const newIndex = formPosition + 1
          form.id = `formSampel_${newIndex}`
          form.querySelectorAll('[id]').forEach((element) => {
            element.id = element.id.replace(/_\d+$/, `_${newIndex}`)
          })
          form.querySelectorAll('*').forEach((element) => {
            ;['onclick', 'onchange', 'oninput'].forEach((attribute) => {
              const handler = element.getAttribute(attribute)
              if (handler) {
                element.setAttribute(
                  attribute,
                  handler.replace(
                    /(switchTab|loadDataByNoSampel|toggleBangunan|removeSample)\(\d+\)/g,
                    `$1(${newIndex})`,
                  ),
                )
              }
            })
          })
          const title = form.querySelector('[data-sample-title]')
          if (title) {
            const icon = title.querySelector('i')
            title.replaceChildren(
              ...(icon ? [icon] : []),
              document.createTextNode(` Data Titik Sampel ${newIndex}`),
            )
          }
        })

        Array.from(document.querySelectorAll('[id^="tabBtn_"]')).forEach(
          (button, buttonPosition) => {
            const newIndex = buttonPosition + 1
            button.id = `tabBtn_${newIndex}`
            button.setAttribute('onclick', `switchTab(${newIndex})`)
            if (button.lastChild) {
              button.lastChild.textContent = ` Sampel ${newIndex}`
            }
          },
        )

        Array.from(
          document.querySelectorAll('[data-sample-result]'),
        ).forEach((row, rowPosition) => {
          const newIndex = rowPosition + 1
          row.dataset.sampleResult = newIndex
          const label = row.querySelector('[data-sample-label]')
          if (label) label.lastChild.textContent = `Sampel ${newIndex}:`
          const value = row.querySelector('[id^="resVal"]')
          const time = row.querySelector('[id^="resWaktu"]')
          if (value) value.id = `resVal${newIndex}`
          if (time) time.id = `resWaktu${newIndex}`
        })

        updateDeleteButtons()
        const nextActiveIndex =
          activeIndex === index
            ? Math.min(index, sampleCount)
            : activeIndex > index
              ? activeIndex - 1
              : activeIndex
        switchTab(nextActiveIndex)
        hitungGG()
      }

      function toggleBangunan(index) {
        const jenis = document.getElementById(`jenisObjek_${index}`).value
        const sec = document.getElementById(`secBangunan_${index}`)

        if (jenis === 'TK' || !jenis) {
          sec.classList.add('hidden')
        } else {
          sec.classList.remove('hidden')
        }
      }

      function toggleBangunanSingle() {
        const jenis = document.getElementById('jenisObjek_single').value
        const sec = document.getElementById('secBangunan_single')

        if (jenis === 'TK' || !jenis) {
          sec.classList.add('hidden')
        } else {
          sec.classList.remove('hidden')
        }
      }

      function formatRupiah(number) {
        return new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
          maximumFractionDigits: 0,
        }).format(number)
      }

      let latestBatchRequest = 0
      let latestSingleRequest = 0

      function readSampleData(suffix) {
        return {
          jenisObjek: document.getElementById(`jenisObjek_${suffix}`).value,
          statusKepemilikan: document.getElementById(`statusKepemilikan_${suffix}`).value,
          jenisData: document.getElementById(`jenisData_${suffix}`).value,
          tglTransVal: document.getElementById(`tanggalTransaksi_${suffix}`).value,
          hargaAwal: parseInputValue(`hargaAwal_${suffix}`),
          luasTanah: parseInputValue(`luasTanah_${suffix}`),
          luasBangunan: parseInputValue(`luasBangunan_${suffix}`),
          biayaPerM2: parseInputValue(`biayaBangunanPerM2_${suffix}`),
          thnBuatInput: Number.parseInt(document.getElementById(`tahunPembuatan_${suffix}`).value, 10) || null,
          thnRenovInput: Number.parseInt(document.getElementById(`tahunRenovasi_${suffix}`).value, 10) || null,
          kondisiFisik: document.getElementById(`kondisiFisik_${suffix}`).value,
        }
      }

      async function requestCalculations(samples) {
        const response = await fetch('/api/calculate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          cache: 'no-store',
          body: JSON.stringify({ samples }),
        })
        const payload = await response.json()
        if (!response.ok) throw new Error(payload.error || 'Perhitungan gagal.')
        return payload
      }

      async function hitungSingle() {
        const requestId = ++latestSingleRequest
        const data = readSampleData('single')
        try {
          const { results } = await requestCalculations([data])
          if (requestId !== latestSingleRequest) return
          const result = results[0]
          document.getElementById('resSingleVal').innerText =
            formatRupiah(result.nilai) + ' / m²'
          document.getElementById('resSingleWaktu').innerText =
            'Penyesuaian Waktu: ' + result.persenWaktu.toFixed(2) + '%'
        } catch (error) {
          console.error(error)
          document.getElementById('resSingleVal').innerText = 'Gagal menghitung'
          document.getElementById('resSingleWaktu').innerText =
            'Periksa koneksi ke layanan perhitungan.'
        }
      }

      async function hitungGG() {
        const requestId = ++latestBatchRequest
        const samples = Array.from({ length: sampleCount }, (_, index) =>
          readSampleData(index + 1),
        )
        try {
          const { results, stats } = await requestCalculations(samples)
          if (requestId !== latestBatchRequest) return

          results.forEach((result, index) => {
            const sampleNumber = index + 1
            document.getElementById(`resVal${sampleNumber}`).innerText =
              formatRupiah(result.nilai) + ' / m²'
            document.getElementById(`resWaktu${sampleNumber}`).innerText =
              'Penyesuaian Waktu: ' + result.persenWaktu.toFixed(2) + '%'
          })
          document.getElementById('resRataRataM2').innerText =
            formatRupiah(stats.mean) + ' / m²'
          document.getElementById('resStdDev').innerText = formatRupiah(stats.stdDev)
          document.getElementById('resDeviasiPersen').innerText =
            stats.deviationPercent.toFixed(2) + '%'
          document.getElementById('sampleCountText').textContent =
            `Hasil gabungan ${stats.sampleCount} titik sampel`
        } catch (error) {
          console.error(error)
          document.getElementById('sampleCountText').textContent =
            'Perhitungan gagal. Periksa koneksi ke layanan.'
        }
      }
      function setDefaultDates() {
        const todayWIB = new Date().toLocaleDateString('en-CA', {
          timeZone: 'Asia/Jakarta',
        })

        document
          .querySelectorAll('[id^="tanggalTransaksi_"]')
          .forEach((el) => (el.value = todayWIB))
      }

      window.onload = function () {
        for (let index = 1; index <= sampleCount; index++) {
          addSampleResultRow(index)
        }
        setDefaultDates()
        hitungGG()
      }



