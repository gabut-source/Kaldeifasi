let uploadedExcelData = []

      const KOREKSI_HAK = { HM: 0, HGB: 0.05, HP: 0.05, HGU: 0.05, TMA: 0.1 }

      // 1. Tabel Matriks Penyusutan Bangunan
      const TABEL_PENYUSUTAN_BANGUNAN = {
        LEBIH_2JT: {
          0: { BS: 0, B: 0, S: 0, J: 0, JS: 0 },
          1: { BS: 3, B: 4, S: 5, J: 6, JS: 7 },
          2: { BS: 5, B: 7, S: 9, J: 11, JS: 11 },
          3: { BS: 7, B: 10, S: 13, J: 16, JS: 16 },
          4: { BS: 10, B: 13, S: 17, J: 20, JS: 21 },
          5: { BS: 12, B: 16, S: 20, J: 24, JS: 27 },
          6: { BS: 14, B: 19, S: 23, J: 28, JS: 31 },
          7: { BS: 15, B: 22, S: 26, J: 31, JS: 35 },
          8: { BS: 15, B: 24, S: 29, J: 34, JS: 38 },
          9: { BS: 15, B: 26, S: 32, J: 37, JS: 43 },
          10: { BS: 15, B: 28, S: 35, J: 40, JS: 47 },
          11: { BS: 15, B: 30, S: 38, J: 43, JS: 50 },
          12: { BS: 15, B: 32, S: 40, J: 46, JS: 53 },
          13: { BS: 15, B: 32, S: 42, J: 49, JS: 56 },
          14: { BS: 15, B: 32, S: 44, J: 52, JS: 58 },
          15: { BS: 15, B: 32, S: 46, J: 54, JS: 60 },
          16: { BS: 15, B: 32, S: 48, J: 56, JS: 63 },
          17: { BS: 15, B: 32, S: 50, J: 58, JS: 65 },
          18: { BS: 15, B: 32, S: 50, J: 60, JS: 67 },
          19: { BS: 15, B: 32, S: 50, J: 62, JS: 69 },
          20: { BS: 15, B: 32, S: 50, J: 64, JS: 71 },
          21: { BS: 15, B: 32, S: 50, J: 66, JS: 73 },
          22: { BS: 15, B: 32, S: 50, J: 67, JS: 75 },
          23: { BS: 15, B: 32, S: 50, J: 67, JS: 76 },
          24: { BS: 15, B: 32, S: 50, J: 67, JS: 77 },
          25: { BS: 15, B: 32, S: 50, J: 67, JS: 78 },
          26: { BS: 15, B: 32, S: 50, J: 67, JS: 79 },
          27: { BS: 15, B: 32, S: 50, J: 67, JS: 80 },
        },
        KURANG_SAMA_2JT: {
          0: { BS: 0, B: 0, S: 0, J: 0, JS: 0 },
          1: { BS: 4, B: 5, S: 6, J: 7, JS: 8 },
          2: { BS: 8, B: 9, S: 10, J: 12, JS: 14 },
          3: { BS: 11, B: 13, S: 14, J: 17, JS: 20 },
          4: { BS: 14, B: 15, S: 18, J: 22, JS: 25 },
          5: { BS: 16, B: 18, S: 22, J: 26, JS: 30 },
          6: { BS: 16, B: 21, S: 26, J: 30, JS: 35 },
          7: { BS: 16, B: 24, S: 29, J: 34, JS: 39 },
          8: { BS: 16, B: 27, S: 32, J: 38, JS: 43 },
          9: { BS: 16, B: 31, S: 35, J: 41, JS: 47 },
          10: { BS: 16, B: 34, S: 38, J: 44, JS: 50 },
          11: { BS: 16, B: 34, S: 41, J: 47, JS: 53 },
          12: { BS: 16, B: 34, S: 44, J: 50, JS: 56 },
          13: { BS: 16, B: 34, S: 47, J: 53, JS: 59 },
          14: { BS: 16, B: 34, S: 50, J: 56, JS: 62 },
          15: { BS: 16, B: 34, S: 52, J: 59, JS: 64 },
          16: { BS: 16, B: 34, S: 52, J: 62, JS: 66 },
          17: { BS: 16, B: 34, S: 52, J: 64, JS: 68 },
          18: { BS: 16, B: 34, S: 52, J: 66, JS: 70 },
          19: { BS: 16, B: 34, S: 52, J: 68, JS: 72 },
          20: { BS: 16, B: 34, S: 52, J: 70, JS: 74 },
          21: { BS: 16, B: 34, S: 52, J: 70, JS: 76 },
          22: { BS: 16, B: 34, S: 52, J: 70, JS: 77 },
          23: { BS: 16, B: 34, S: 52, J: 70, JS: 78 },
          24: { BS: 16, B: 34, S: 52, J: 70, JS: 79 },
          25: { BS: 16, B: 34, S: 52, J: 70, JS: 80 },
        },
      }

      // 2. Tabel Matriks Penyusutan Ruko
      const TABEL_PENYUSUTAN_RUKO = {
        LEBIH_3JT: {
          0: { BS: 0, B: 0, S: 0, J: 0, JS: 0 },
          1: { BS: 2, B: 3, S: 4, J: 5, JS: 6 },
          2: { BS: 4, B: 5, S: 7, J: 9, JS: 10 },
          3: { BS: 6, B: 8, S: 10, J: 13, JS: 14 },
          4: { BS: 8, B: 10, S: 14, J: 17, JS: 18 },
          5: { BS: 10, B: 13, S: 18, J: 21, JS: 22 },
          6: { BS: 12, B: 15, S: 21, J: 24, JS: 26 },
          7: { BS: 13, B: 17, S: 24, J: 29, JS: 30 },
          8: { BS: 13, B: 20, S: 27, J: 32, JS: 34 },
          9: { BS: 13, B: 22, S: 30, J: 35, JS: 38 },
          10: { BS: 13, B: 24, S: 33, J: 38, JS: 41 },
          11: { BS: 13, B: 26, S: 36, J: 41, JS: 44 },
          12: { BS: 13, B: 28, S: 39, J: 44, JS: 47 },
          13: { BS: 13, B: 28, S: 41, J: 47, JS: 50 },
          14: { BS: 13, B: 28, S: 43, J: 49, JS: 52 },
          15: { BS: 13, B: 28, S: 45, J: 51, JS: 54 },
          16: { BS: 13, B: 28, S: 47, J: 53, JS: 56 },
          17: { BS: 13, B: 28, S: 49, J: 55, JS: 58 },
          18: { BS: 13, B: 28, S: 49, J: 57, JS: 60 },
          19: { BS: 13, B: 28, S: 49, J: 59, JS: 62 },
          20: { BS: 13, B: 28, S: 49, J: 61, JS: 64 },
          21: { BS: 13, B: 28, S: 49, J: 63, JS: 66 },
          22: { BS: 13, B: 28, S: 49, J: 65, JS: 68 },
          23: { BS: 13, B: 28, S: 49, J: 65, JS: 70 },
          24: { BS: 13, B: 28, S: 49, J: 65, JS: 72 },
          25: { BS: 13, B: 28, S: 49, J: 65, JS: 74 },
          26: { BS: 13, B: 28, S: 49, J: 65, JS: 76 },
          27: { BS: 13, B: 28, S: 49, J: 65, JS: 77 },
          28: { BS: 13, B: 28, S: 49, J: 65, JS: 77 },
          29: { BS: 13, B: 28, S: 49, J: 65, JS: 77 },
          30: { BS: 13, B: 28, S: 49, J: 65, JS: 77 },
        },
        KURANG_SAMA_3JT: {
          0: { BS: 0, B: 0, S: 0, J: 0, JS: 0 },
          1: { BS: 3, B: 4, S: 5, J: 6, JS: 7 },
          2: { BS: 7, B: 8, S: 9, J: 10, JS: 11 },
          3: { BS: 10, B: 11, S: 13, J: 14, JS: 15 },
          4: { BS: 12, B: 14, S: 17, J: 18, JS: 19 },
          5: { BS: 14, B: 17, S: 21, J: 22, JS: 23 },
          6: { BS: 14, B: 20, S: 25, J: 26, JS: 27 },
          7: { BS: 14, B: 23, S: 29, J: 30, JS: 31 },
          8: { BS: 14, B: 26, S: 32, J: 34, JS: 35 },
          9: { BS: 14, B: 28, S: 35, J: 38, JS: 39 },
          10: { BS: 14, B: 30, S: 38, J: 41, JS: 43 },
          11: { BS: 14, B: 30, S: 41, J: 44, JS: 47 },
          12: { BS: 14, B: 30, S: 44, J: 50, JS: 56 },
          13: { BS: 14, B: 30, S: 47, J: 50, JS: 53 },
          14: { BS: 14, B: 30, S: 49, J: 53, JS: 56 },
          15: { BS: 14, B: 30, S: 51, J: 56, JS: 59 },
          16: { BS: 14, B: 30, S: 51, J: 58, JS: 62 },
          17: { BS: 14, B: 30, S: 51, J: 60, JS: 64 },
          18: { BS: 14, B: 30, S: 51, J: 62, JS: 66 },
          19: { BS: 14, B: 30, S: 51, J: 64, JS: 68 },
          20: { BS: 14, B: 30, S: 51, J: 66, JS: 70 },
          21: { BS: 14, B: 30, S: 51, J: 66, JS: 72 },
          22: { BS: 14, B: 30, S: 51, J: 66, JS: 74 },
          23: { BS: 14, B: 30, S: 51, J: 66, JS: 76 },
          24: { BS: 14, B: 30, S: 51, J: 66, JS: 77 },
          25: { BS: 14, B: 30, S: 51, J: 66, JS: 78 },
          26: { BS: 14, B: 30, S: 51, J: 66, JS: 78 },
          27: { BS: 14, B: 30, S: 51, J: 66, JS: 78 },
          28: { BS: 14, B: 30, S: 51, J: 66, JS: 78 },
          29: { BS: 14, B: 30, S: 51, J: 66, JS: 78 },
          30: { BS: 14, B: 30, S: 51, J: 66, JS: 78 },
        },
      }


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

      // Fungsi Hitung Penyusutan Bangunan Umum
      function hitungPenyusutanBangunan(
        biayaPerMeter,
        umurEfektif,
        kondisiFisik,
      ) {
        const umurClamped = Math.min(Math.max(umurEfektif, 0), 50)
        const tabelUtama =
          biayaPerMeter > 2000000
            ? TABEL_PENYUSUTAN_BANGUNAN.LEBIH_2JT
            : TABEL_PENYUSUTAN_BANGUNAN.KURANG_SAMA_2JT

        const maxUmurTabel = Math.max(...Object.keys(tabelUtama).map(Number))
        const umurKey = umurClamped > maxUmurTabel ? maxUmurTabel : umurClamped

        return tabelUtama[umurKey]?.[kondisiFisik] || 0
      }

      // Fungsi Hitung Penyusutan Ruko
      function hitungPenyusutanRuko(biayaPerMeter, umurEfektif, kondisiFisik) {
        const umurClamped = Math.min(Math.max(umurEfektif, 0), 50)
        const tabelUtama =
          biayaPerMeter > 3000000
            ? TABEL_PENYUSUTAN_RUKO.LEBIH_3JT
            : TABEL_PENYUSUTAN_RUKO.KURANG_SAMA_3JT

        const maxUmurTabel = Math.max(...Object.keys(tabelUtama).map(Number))
        const umurKey = umurClamped > maxUmurTabel ? maxUmurTabel : umurClamped

        return tabelUtama[umurKey]?.[kondisiFisik] || 0
      }

      // Fungsi Hitung Nilai Bangunan / Ruko
      function hitungNilaiBangunan(
        jenisObjek,
        luasBangunan,
        biayaPerMeter,
        umurEfektif,
        kondisiFisik,
      ) {
        const rcnTotal = luasBangunan * biayaPerMeter
        let persenPenyusutan = 0

        if (jenisObjek === 'R') {
          persenPenyusutan = hitungPenyusutanRuko(
            biayaPerMeter,
            umurEfektif,
            kondisiFisik,
          )
        } else {
          persenPenyusutan = hitungPenyusutanBangunan(
            biayaPerMeter,
            umurEfektif,
            kondisiFisik,
          )
        }

        const nilaiSisaBangunan = rcnTotal * (1 - persenPenyusutan / 100)

        return {
          rcnTotal: rcnTotal,
          persenPenyusutan: persenPenyusutan,
          nilaiSisaBangunan: nilaiSisaBangunan,
        }
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
        for (let i = 1; i <= 3; i++) {
          const form = document.getElementById(`formSampel_${i}`)
          const btn = document.getElementById(`tabBtn_${i}`)
          if (i === index) {
            form.classList.remove('hidden')
            btn.className =
              'flex-1 py-2.5 text-xs font-bold rounded-xl transition-all duration-200 bg-[#1f1a30] text-[#ffffff] shadow-sm flex items-center justify-center gap-1.5 cursor-pointer hover:bg-[#373153]'
          } else {
            form.classList.add('hidden')
            btn.className =
              'flex-1 py-2.5 text-xs font-bold rounded-xl transition-all duration-200 text-[#d0cde1] hover:bg-[#373153]/60 flex items-center justify-center gap-1.5 cursor-pointer'
          }
        }
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

      function kalkulasiModelExcel(data) {
        const {
          jenisObjek,
          statusKepemilikan,
          jenisData,
          tglTransVal,
          hargaAwal,
          luasTanah,
          luasBangunan,
          biayaPerM2,
          thnBuatInput,
          thnRenovInput,
          kondisiFisik,
        } = data

        if (luasTanah <= 0) return { nilai: 0, persenWaktu: 0 }

        // 1. Tanggal Cutoff & Tahun Acuan dari transaksi
        const tglTrans = tglTransVal ? new Date(tglTransVal) : new Date()
        const tahunAcuan = tglTrans.getFullYear()
        const tanggalCutoff = new Date(`${tahunAcuan}-12-31`)

        // 2. Harga Penyesuaian Jenis Data (Transaksi = 100%, Penawaran = 90%)
        const hargaPenyesuaianData =
          jenisData === 'Penawaran' ? hargaAwal * 0.9 : hargaAwal

        // 3. Hitung Nilai Bangunan / Ruko
        let nilaiBangunanTotal = 0
        if (jenisObjek && jenisObjek !== 'TK') {
          const thnBuat = thnBuatInput || tahunAcuan
          const thnRenov = thnRenovInput || thnBuat
          const kondisi = kondisiFisik || 'B'

          let umurEfektif = Math.ceil(
            (tahunAcuan - thnBuat + 2 * (tahunAcuan - thnRenov)) / 3,
          )
          if (umurEfektif < 0) umurEfektif = 0

          const hasilBangunan = hitungNilaiBangunan(
            jenisObjek,
            luasBangunan,
            biayaPerM2,
            umurEfektif,
            kondisi,
          )
          nilaiBangunanTotal = hasilBangunan.nilaiSisaBangunan
        }

        // 4. Harga Tanah Transaksi per-m2
        const hargaTanahMurniTotal = hargaPenyesuaianData - nilaiBangunanTotal
        const hargaTanahPerM2 = hargaTanahMurniTotal / luasTanah

        // 5. Penyesuaian Waktu & Hak (per-m2)
        const diffDays = (tanggalCutoff - tglTrans) / (1000 * 60 * 60 * 24)
        const persenPenyesuaianWaktu = (diffDays / 365) * 0.1
        const persenPenyesuaianHak = KOREKSI_HAK[statusKepemilikan] || 0

        // 6. Indikasi Nilai Tanah Akhir per-m2
        const nilaiTanahAkhirPerM2 =
          hargaTanahPerM2 * (1 + persenPenyesuaianWaktu + persenPenyesuaianHak)

        return {
          nilai: nilaiTanahAkhirPerM2,
          persenWaktu: persenPenyesuaianWaktu * 100,
        }
      }

      function hitungNilaiPerM2(index) {
        const data = {
          jenisObjek: document.getElementById(`jenisObjek_${index}`).value,
          statusKepemilikan: document.getElementById(
            `statusKepemilikan_${index}`,
          ).value,
          jenisData: document.getElementById(`jenisData_${index}`).value,
          tglTransVal: document.getElementById(`tanggalTransaksi_${index}`)
            .value,
          hargaAwal: parseInputValue(`hargaAwal_${index}`),
          luasTanah: parseInputValue(`luasTanah_${index}`),
          luasBangunan: parseInputValue(`luasBangunan_${index}`),
          biayaPerM2: parseInputValue(`biayaBangunanPerM2_${index}`),
          thnBuatInput: parseInt(
            document.getElementById(`tahunPembuatan_${index}`).value,
          ),
          thnRenovInput: parseInt(
            document.getElementById(`tahunRenovasi_${index}`).value,
          ),
          kondisiFisik: document.getElementById(`kondisiFisik_${index}`).value,
        }

        return kalkulasiModelExcel(data)
      }

      function hitungSingle() {
        const data = {
          jenisObjek: document.getElementById('jenisObjek_single').value,
          statusKepemilikan: document.getElementById('statusKepemilikan_single')
            .value,
          jenisData: document.getElementById('jenisData_single').value,
          tglTransVal: document.getElementById('tanggalTransaksi_single').value,
          hargaAwal: parseInputValue('hargaAwal_single'),
          luasTanah: parseInputValue('luasTanah_single'),
          luasBangunan: parseInputValue('luasBangunan_single'),
          biayaPerM2: parseInputValue('biayaBangunanPerM2_single'),
          thnBuatInput: parseInt(
            document.getElementById('tahunPembuatan_single').value,
          ),
          thnRenovInput: parseInt(
            document.getElementById('tahunRenovasi_single').value,
          ),
          kondisiFisik: document.getElementById('kondisiFisik_single').value,
        }

        const res = kalkulasiModelExcel(data)

        if (data.luasTanah <= 0) {
          document.getElementById('resSingleVal').innerText = 'Rp 0 / m²'
          document.getElementById('resSingleWaktu').innerText =
            'Penyesuaian Waktu: 0.00%'
          return
        }

        document.getElementById('resSingleVal').innerText =
          formatRupiah(res.nilai) + ' / m²'
        document.getElementById('resSingleWaktu').innerText =
          'Penyesuaian Waktu: ' + res.persenWaktu.toFixed(2) + '%'
      }

      function hitungGG() {
        const res1 = hitungNilaiPerM2(1)
        const res2 = hitungNilaiPerM2(2)
        const res3 = hitungNilaiPerM2(3)

        const arr = [res1.nilai, res2.nilai, res3.nilai]
        const mean = (res1.nilai + res2.nilai + res3.nilai) / 3

        const variance =
          arr.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) /
          (arr.length - 1)
        const stdDev = Math.sqrt(variance)
        const deviasiPersen = mean !== 0 ? (stdDev / Math.abs(mean)) * 100 : 0

        document.getElementById('resVal1').innerText =
          formatRupiah(res1.nilai) + ' / m²'
        document.getElementById('resWaktu1').innerText =
          'Penyesuaian Waktu: ' + res1.persenWaktu.toFixed(2) + '%'

        document.getElementById('resVal2').innerText =
          formatRupiah(res2.nilai) + ' / m²'
        document.getElementById('resWaktu2').innerText =
          'Penyesuaian Waktu: ' + res2.persenWaktu.toFixed(2) + '%'

        document.getElementById('resVal3').innerText =
          formatRupiah(res3.nilai) + ' / m²'
        document.getElementById('resWaktu3').innerText =
          'Penyesuaian Waktu: ' + res3.persenWaktu.toFixed(2) + '%'

        document.getElementById('resRataRataM2').innerText =
          formatRupiah(mean) + ' / m²'
        document.getElementById('resStdDev').innerText = formatRupiah(
          isNaN(stdDev) ? 0 : stdDev,
        )
        document.getElementById('resDeviasiPersen').innerText =
          (isNaN(deviasiPersen) ? 0 : deviasiPersen).toFixed(2) + '%'
      }

      function setDefaultDates() {
        const todayWIB = new Date().toLocaleDateString('en-CA', {
          timeZone: 'Asia/Jakarta',
        })

        const dateInputIds = [
          'tanggalTransaksi_1',
          'tanggalTransaksi_2',
          'tanggalTransaksi_3',
          'tanggalTransaksi_single',
        ]

        dateInputIds.forEach((id) => {
          const el = document.getElementById(id)
          if (el) el.value = todayWIB
        })
      }

      window.onload = function () {
        setDefaultDates()
        hitungGG()
      }



