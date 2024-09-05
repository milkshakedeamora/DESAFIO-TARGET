const faturamento = 
[
    { "estado": "SP", "faturamento": 67836.43 },
    { "estado": "RJ", "faturamento": 36678.66 },
    { "estado": "MG", "faturamento": 29229.88 },
    { "estado": "ES", "faturamento": 27165.48 },
    { "estado": "Outros", "faturamento": 19849.53 }
]
faturamento.forEach(item => 
    console.log(`${item.estado}: ${((item.faturamento / faturamento.reduce((sum, { faturamento }) => sum + faturamento, 0)) * 100).toFixed(2)}%`)
)