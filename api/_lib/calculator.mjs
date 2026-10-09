const KOREKSI_HAK = { HM: 0, HGB: 0.05, HP: 0.05, HGU: 0.05, TMA: 0.1 }
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
function getDepreciation(table, highKey, lowKey, costPerMeter, effectiveAge, condition) {
  const selected = costPerMeter > (highKey === 'LEBIH_3JT' ? 3000000 : 2000000) ? table[highKey] : table[lowKey]
  const boundedAge = Math.min(Math.max(effectiveAge, 0), 50)
  const maxAge = Math.max(...Object.keys(selected).map(Number))
  const ageKey = String(Math.min(boundedAge, maxAge))
  return selected[ageKey]?.[condition] || 0
}

function getBuildingValue(data, referenceYear) {
  const { jenisObjek, luasBangunan, biayaPerM2, thnBuatInput, thnRenovInput, kondisiFisik } = data
  if (!jenisObjek || jenisObjek === 'TK') return 0

  const yearBuilt = thnBuatInput || referenceYear
  const yearRenovated = thnRenovInput || yearBuilt
  const effectiveAge = Math.max(0, Math.ceil((referenceYear - yearBuilt + 2 * (referenceYear - yearRenovated)) / 3))
  const isShopHouse = jenisObjek === 'R'
  const table = isShopHouse ? TABEL_PENYUSUTAN_RUKO : TABEL_PENYUSUTAN_BANGUNAN
  const depreciation = getDepreciation(table, isShopHouse ? 'LEBIH_3JT' : 'LEBIH_2JT', isShopHouse ? 'KURANG_SAMA_3JT' : 'KURANG_SAMA_2JT', biayaPerM2, effectiveAge, kondisiFisik || 'B')
  return luasBangunan * biayaPerM2 * (1 - depreciation / 100)
}

function calculateOne(data) {
  const landArea = Number(data.luasTanah) || 0
  const transactionDate = data.tglTransVal ? new Date(`${data.tglTransVal}T00:00:00`) : new Date()
  if (Number.isNaN(transactionDate.getTime())) throw new Error('Tanggal transaksi tidak valid.')
  const referenceYear = transactionDate.getFullYear()
  const buildingValue = getBuildingValue(data, referenceYear)
  if (landArea <= 0) {
    return { nilai: 0, persenWaktu: 0, nilaiBangunan: buildingValue }
  }

  const adjustedPrice = (Number(data.hargaAwal) || 0) * (data.jenisData === 'Penawaran' ? 0.9 : 1)
  const landValuePerMeter = (adjustedPrice - buildingValue) / landArea
  const cutoffDate = new Date(`${referenceYear}-12-31T00:00:00`)
  const dayDifference = (cutoffDate - transactionDate) / 86400000
  const timeAdjustment = (dayDifference / 365) * 0.1
  const rightAdjustment = KOREKSI_HAK[data.statusKepemilikan] || 0

  return {
    nilai: landValuePerMeter * (1 + timeAdjustment + rightAdjustment),
    persenWaktu: timeAdjustment * 100,
    nilaiBangunan: buildingValue,
  }
}

function calculateBatch(samples) {
  if (!Array.isArray(samples) || samples.length < 1 || samples.length > 100) {
    throw new Error('Kirim antara 1 sampai 100 sampel.')
  }
  const calculatedResults = samples.map(calculateOne)
  const validIndexes = calculatedResults
    .map((_, index) => index)
    .filter((index) => Number(samples[index].luasTanah) > 0)
  const validValues = validIndexes.map((index) => calculatedResults[index].nilai)
  const mean = validValues.length ? validValues.reduce((sum, value) => sum + value, 0) / validValues.length : 0
  const variance = validValues.length > 1
    ? validValues.reduce((sum, value) => sum + (value - mean) ** 2, 0) / (validValues.length - 1)
    : 0
  const stdDev = Math.sqrt(variance)
  const deviationPercent = mean !== 0 ? (stdDev / Math.abs(mean)) * 100 : 0
  const sortedValues = [...validValues].sort((a, b) => a - b)
  const middle = Math.floor(sortedValues.length / 2)
  const median = sortedValues.length === 0
    ? 0
    : sortedValues.length % 2 === 0
      ? (sortedValues[middle - 1] + sortedValues[middle]) / 2
      : sortedValues[middle]
  const results = calculatedResults.map((result, index) => {
    if (deviationPercent < 30 || !validIndexes.includes(index) || validIndexes.length < 2) {
      return { ...result, isOutlier: false }
    }

    const relativeDifference = median === 0
      ? (result.nilai === 0 ? 0 : Infinity)
      : (Math.abs(result.nilai - median) / Math.abs(median)) * 100

    return { ...result, isOutlier: relativeDifference >= 30 }
  })
  return {
    results,
    stats: { mean, stdDev, deviationPercent, sampleCount: validValues.length },
  }
}

export { calculateBatch }
