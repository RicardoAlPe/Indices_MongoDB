use unab
switched to db unab
db.createCollection("empleados")
{ ok: 1 }
db.empleados.insertMany([
  {
    nombre: "Carolina Suárez",
    edad: 29,
    ciudad: "Bogotá",
    correo: "carolina@unab.com",
    cargo: "Desarrolladora Backend",
    departamento: "Tecnología"
  },
  {
    nombre: "Miguel Diaz",
    edad: 32,
    ciudad: "San Miguel",
    correo: "miguel@unab.com",
    cargo: "Desarrollador Frontend",
    departamento: "Tecnología"
  },
  {
    nombre: "María González",
    edad: 27,
    ciudad: "Sonsonate",
    correo: "maria@unab.com",
    cargo: "Diseñadora UX",
    departamento: "Diseño"
  },
  {
    nombre: "Pedro Rodríguez",
    edad: 35,
    ciudad: "San Salvador",
    correo: "pedro@unab.com",
    cargo: "Gerente de Proyecto",
    departamento: "Gestión"
  },
  {
    nombre: "Laura Martínez",
    edad: 28,
    ciudad: "San Miguel",
    correo: "laura@unab.com",
    cargo: "Analista de Datos",
    departamento: "Analítica"
  },
  {
    nombre: "Carlos Gómez",
    edad: 31,
    ciudad: "Santa Ana",
    correo: "carlos@unab.com",
    cargo: "Desarrollador Full Stack",
    departamento: "Tecnología"
  },
  {
    nombre: "Ana López",
    edad: 26,
    ciudad: "Chalatenango",
    correo: "ana@unab.com",
    cargo: "Especialista en Marketing",
    departamento: "Marketing"
  },
  {
    nombre: "David Ramírez",
    edad: 33,
    ciudad: "Chalatenango",
    correo: "david@unab.com",
    cargo: "Administrador de Sistemas",
    departamento: "Tecnología"
  },
  {
    nombre: "Sofía Torres",
    edad: 30,
    ciudad: "Medellín",
    correo: "sofia@unab.com",
    cargo: "Recursos Humanos",
    departamento: "HR"
  },
  {
    nombre: "Jorge Herrera",
    edad: 29,
    ciudad: "Cali",
    correo: "jorge@unab.com",
    cargo: "Contador",
    departamento: "Finanzas"
  },
  {
    nombre: "Patricia Díaz",
    edad: 34,
    ciudad: "Barranquilla",
    correo: "patricia@unab.com",
    cargo: "Desarrolladora Backend",
    departamento: "Tecnología"
  },
  {
    nombre: "Fernando Castro",
    edad: 28,
    ciudad: "San Salvador",
    correo: "fernando@unab.com",
    cargo: "Especialista en Seguridad",
    departamento: "Tecnología"
  },
  {
    nombre: "Gabriela Ruiz",
    edad: 31,
    ciudad: "Chalatenango",
    correo: "gabriela@unab.com",
    cargo: "Diseñadora UI",
    departamento: "Diseño"
  },
  {
    nombre: "Ricardo Mendoza",
    edad: 36,
    ciudad: "Chalatenango",
    correo: "ricardo@unab.com",
    cargo: "Director de Tecnología",
    departamento: "Tecnología"
  },
  {
    nombre: "Daniela Vargas",
    edad: 27,
    ciudad: "San Salvador",
    correo: "daniela@unab.com",
    cargo: "Analista QA",
    departamento: "Tecnología"
  },
  {
    nombre: "Andrés Guzmán",
    edad: 32,
    ciudad: "San Miguel",
    correo: "andres@unab.com",
    cargo: "Desarrollador Mobile",
    departamento: "Tecnología"
  },
  {
    nombre: "Lucía Rojas",
    edad: 29,
    ciudad: "Chalatenango",
    correo: "lucia@unab.com",
    cargo: "Especialista en Big Data",
    departamento: "Analítica"
  },
  {
    nombre: "Oscar Silva",
    edad: 35,
    ciudad: "Santa Ana",
    correo: "oscar@unab.com",
    cargo: "Arquitecto de Software",
    departamento: "Tecnología"
  },
  {
    nombre: "Camila Ortega",
    edad: 30,
    ciudad: "San Salvador",
    correo: "camila@unab.com",
    cargo: "Product Manager",
    departamento: "Gestión"
  },
  {
    nombre: "Mauricio Navarro",
    edad: 33,
    ciudad: "Chalatenango",
    correo: "mauricio@unab.com",
    cargo: "DevOps Engineer",
    departamento: "Tecnología"
  }
]);

{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('6828b0e806d2025e04552af2'),
    '1': ObjectId('6828b0e806d2025e04552af3'),
    '2': ObjectId('6828b0e806d2025e04552af4'),
    '3': ObjectId('6828b0e806d2025e04552af5'),
    '4': ObjectId('6828b0e806d2025e04552af6'),
    '5': ObjectId('6828b0e806d2025e04552af7'),
    '6': ObjectId('6828b0e806d2025e04552af8'),
    '7': ObjectId('6828b0e806d2025e04552af9'),
    '8': ObjectId('6828b0e806d2025e04552afa'),
    '9': ObjectId('6828b0e806d2025e04552afb'),
    '10': ObjectId('6828b0e806d2025e04552afc'),
    '11': ObjectId('6828b0e806d2025e04552afd'),
    '12': ObjectId('6828b0e806d2025e04552afe'),
    '13': ObjectId('6828b0e806d2025e04552aff'),
    '14': ObjectId('6828b0e806d2025e04552b00'),
    '15': ObjectId('6828b0e806d2025e04552b01'),
    '16': ObjectId('6828b0e806d2025e04552b02'),
    '17': ObjectId('6828b0e806d2025e04552b03'),
    '18': ObjectId('6828b0e806d2025e04552b04'),
    '19': ObjectId('6828b0e806d2025e04552b05')
  }
}

db.empleados.createIndex({ ciudad: 1 });
ciudad_1
db.empleados.createIndex({ ciudad: 1, edad: 1 });
ciudad_1_edad_1
db.empleados.createIndex({ correo: 1 }, { unique: true });
correo_1
db.empleados.createIndex({ cargo: "text" });
cargo_text

db.empleados.find({ ciudad: "Bogotá" }).explain("executionStats")

{
  explainVersion: '1',
  queryPlanner: {
    namespace: 'unab.empleados',
    parsedQuery: {
      ciudad: {
        '$eq': 'Bogotá'
      }
    },
    indexFilterSet: false,
    queryHash: '17161199',
    planCacheShapeHash: '17161199',
    planCacheKey: 'B3AB353B',
    optimizationTimeMillis: 46,
    maxIndexedOrSolutionsReached: false,
    maxIndexedAndSolutionsReached: false,
    maxScansToExplodeReached: false,
    prunedSimilarIndexes: false,
    winningPlan: {
      isCached: false,
      stage: 'FETCH',
      inputStage: {
        stage: 'IXSCAN',
        keyPattern: {
          ciudad: 1
        },
        indexName: 'ciudad_1',
        isMultiKey: false,
        multiKeyPaths: {
          ciudad: []
        },
        isUnique: false,
        isSparse: false,
        isPartial: false,
        indexVersion: 2,
        direction: 'forward',
        indexBounds: {
          ciudad: [
            '["Bogotá", "Bogotá"]'
          ]
        }
      }
    },
    rejectedPlans: [
      {
        isCached: false,
        stage: 'FETCH',
        inputStage: {
          stage: 'IXSCAN',
          keyPattern: {
            ciudad: 1,
            edad: 1
          },
          indexName: 'ciudad_1_edad_1',
          isMultiKey: false,
          multiKeyPaths: {
            ciudad: [],
            edad: []
          },
          isUnique: false,
          isSparse: false,
          isPartial: false,
          indexVersion: 2,
          direction: 'forward',
          indexBounds: {
            ciudad: [
              '["Bogotá", "Bogotá"]'
            ],
            edad: [
              '[MinKey, MaxKey]'
            ]
          }
        }
      }
    ]
  },
  executionStats: {
    executionSuccess: true,
    nReturned: 1,
    executionTimeMillis: 46,
    totalKeysExamined: 1,
    totalDocsExamined: 1,
    executionStages: {
      isCached: false,
      stage: 'FETCH',
      nReturned: 1,
      executionTimeMillisEstimate: 0,
      works: 3,
      advanced: 1,
      needTime: 0,
      needYield: 0,
      saveState: 0,
      restoreState: 0,
      isEOF: 1,
      docsExamined: 1,
      alreadyHasObj: 0,
      inputStage: {
        stage: 'IXSCAN',
        nReturned: 1,
        executionTimeMillisEstimate: 0,
        works: 2,
        advanced: 1,
        needTime: 0,
        needYield: 0,
        saveState: 0,
        restoreState: 0,
        isEOF: 1,
        keyPattern: {
          ciudad: 1
        },
        indexName: 'ciudad_1',
        isMultiKey: false,
        multiKeyPaths: {
          ciudad: []
        },
        isUnique: false,
        isSparse: false,
        isPartial: false,
        indexVersion: 2,
        direction: 'forward',
        indexBounds: {
          ciudad: [
            '["Bogotá", "Bogotá"]'
          ]
        },
        keysExamined: 1,
        seeks: 1,
        dupsTested: 0,
        dupsDropped: 0
      }
    }
  },
  queryShapeHash: 'DBAC335032266C520527580BE1B0FDF414DE605C5E40B0859FEE5D1C1F05AC74',
  command: {
    find: 'empleados',
    filter: {
      ciudad: 'Bogotá'
    },
    '$db': 'unab'
  },
  serverInfo: {
    host: 'Ricardo',
    port: 27017,
    version: '8.0.8',
    gitVersion: '7f52660c14217ed2c8d3240f823a2291a4fe6abd'
  },
  serverParameters: {
    internalQueryFacetBufferSizeBytes: 104857600,
    internalQueryFacetMaxOutputDocSizeBytes: 104857600,
    internalLookupStageIntermediateDocumentMaxSizeBytes: 104857600,
    internalDocumentSourceGroupMaxMemoryBytes: 104857600,
    internalQueryMaxBlockingSortMemoryUsageBytes: 104857600,
    internalQueryProhibitBlockingMergeOnMongoS: 0,
    internalQueryMaxAddToSetBytes: 104857600,
    internalDocumentSourceSetWindowFieldsMaxMemoryBytes: 104857600,
    internalQueryFrameworkControl: 'trySbeRestricted',
    internalQueryPlannerIgnoreIndexWithCollationForRegex: 1
  },
  ok: 1
}

db.empleados.find({ correo: "carolina@unab.com" }).explain("executionStats")
{
  explainVersion: '1',
  queryPlanner: {
    namespace: 'unab.empleados',
    parsedQuery: {
      correo: {
        '$eq': 'carolina@unab.com'
      }
    },
    indexFilterSet: false,
    queryHash: 'ACF5622C',
    planCacheShapeHash: 'ACF5622C',
    planCacheKey: '1CB72A09',
    optimizationTimeMillis: 0,
    maxIndexedOrSolutionsReached: false,
    maxIndexedAndSolutionsReached: false,
    maxScansToExplodeReached: false,
    prunedSimilarIndexes: false,
    winningPlan: {
      isCached: false,
      stage: 'EXPRESS_IXSCAN',
      keyPattern: '{ correo: 1 }',
      indexName: 'correo_1'
    },
    rejectedPlans: []
  },
  executionStats: {
    executionSuccess: true,
    nReturned: 1,
    executionTimeMillis: 27,
    totalKeysExamined: 1,
    totalDocsExamined: 1,
    executionStages: {
      isCached: false,
      stage: 'EXPRESS_IXSCAN',
      keyPattern: '{ correo: 1 }',
      indexName: 'correo_1',
      keysExamined: 1,
      docsExamined: 1,
      nReturned: 1
    }
  },
  queryShapeHash: '00AADC1F81240B12903C67203B97A852CC665995613CD43E2B32222B26396E72',
  command: {
    find: 'empleados',
    filter: {
      correo: 'carolina@unab.com'
    },
    '$db': 'unab'
  },
  serverInfo: {
    host: 'Ricardo',
    port: 27017,
    version: '8.0.8',
    gitVersion: '7f52660c14217ed2c8d3240f823a2291a4fe6abd'
  },
  serverParameters: {
    internalQueryFacetBufferSizeBytes: 104857600,
    internalQueryFacetMaxOutputDocSizeBytes: 104857600,
    internalLookupStageIntermediateDocumentMaxSizeBytes: 104857600,
    internalDocumentSourceGroupMaxMemoryBytes: 104857600,
    internalQueryMaxBlockingSortMemoryUsageBytes: 104857600,
    internalQueryProhibitBlockingMergeOnMongoS: 0,
    internalQueryMaxAddToSetBytes: 104857600,
    internalDocumentSourceSetWindowFieldsMaxMemoryBytes: 104857600,
    internalQueryFrameworkControl: 'trySbeRestricted',
    internalQueryPlannerIgnoreIndexWithCollationForRegex: 1
  },
  ok: 1
}

db.empleados.find({ nombre: "Pedro Rodríguez" }).explain("executionStats")
{
  explainVersion: '1',
  queryPlanner: {
    namespace: 'unab.empleados',
    parsedQuery: {
      nombre: {
        '$eq': 'Pedro Rodríguez'
      }
    },
    indexFilterSet: false,
    queryHash: '78CE6D7E',
    planCacheShapeHash: '78CE6D7E',
    planCacheKey: '4E1FE5BE',
    optimizationTimeMillis: 0,
    maxIndexedOrSolutionsReached: false,
    maxIndexedAndSolutionsReached: false,
    maxScansToExplodeReached: false,
    prunedSimilarIndexes: false,
    winningPlan: {
      isCached: false,
      stage: 'COLLSCAN',
      filter: {
        nombre: {
          '$eq': 'Pedro Rodríguez'
        }
      },
      direction: 'forward'
    },
    rejectedPlans: []
  },
  executionStats: {
    executionSuccess: true,
    nReturned: 1,
    executionTimeMillis: 0,
    totalKeysExamined: 0,
    totalDocsExamined: 20,
    executionStages: {
      isCached: false,
      stage: 'COLLSCAN',
      filter: {
        nombre: {
          '$eq': 'Pedro Rodríguez'
        }
      },
      nReturned: 1,
      executionTimeMillisEstimate: 0,
      works: 21,
      advanced: 1,
      needTime: 19,
      needYield: 0,
      saveState: 0,
      restoreState: 0,
      isEOF: 1,
      direction: 'forward',
      docsExamined: 20
    }
  },
  queryShapeHash: 'AD8D4B45CF1E4C6CA1177AAF47F432BC1A739A1F9B337DF25AA4DD4F0367535E',
  command: {
    find: 'empleados',
    filter: {
      nombre: 'Pedro Rodríguez'
    },
    '$db': 'unab'
  },
  serverInfo: {
    host: 'Ricardo',
    port: 27017,
    version: '8.0.8',
    gitVersion: '7f52660c14217ed2c8d3240f823a2291a4fe6abd'
  },
  serverParameters: {
    internalQueryFacetBufferSizeBytes: 104857600,
    internalQueryFacetMaxOutputDocSizeBytes: 104857600,
    internalLookupStageIntermediateDocumentMaxSizeBytes: 104857600,
    internalDocumentSourceGroupMaxMemoryBytes: 104857600,
    internalQueryMaxBlockingSortMemoryUsageBytes: 104857600,
    internalQueryProhibitBlockingMergeOnMongoS: 0,
    internalQueryMaxAddToSetBytes: 104857600,
    internalDocumentSourceSetWindowFieldsMaxMemoryBytes: 104857600,
    internalQueryFrameworkControl: 'trySbeRestricted',
    internalQueryPlannerIgnoreIndexWithCollationForRegex: 1
  },
  ok: 1
}

db.empleados.find({ ciudad: "San Miguel", edad: 32 }).explain("executionStats")
{
  explainVersion: '1',
  queryPlanner: {
    namespace: 'unab.empleados',
    parsedQuery: {
      '$and': [
        {
          ciudad: {
            '$eq': 'San Miguel'
          }
        },
        {
          edad: {
            '$eq': 32
          }
        }
      ]
    },
    indexFilterSet: false,
    queryHash: 'E6D52E0B',
    planCacheShapeHash: 'E6D52E0B',
    planCacheKey: '00238E56',
    optimizationTimeMillis: 0,
    maxIndexedOrSolutionsReached: false,
    maxIndexedAndSolutionsReached: false,
    maxScansToExplodeReached: false,
    prunedSimilarIndexes: false,
    winningPlan: {
      isCached: true,
      stage: 'FETCH',
      inputStage: {
        stage: 'IXSCAN',
        keyPattern: {
          ciudad: 1,
          edad: 1
        },
        indexName: 'ciudad_1_edad_1',
        isMultiKey: false,
        multiKeyPaths: {
          ciudad: [],
          edad: []
        },
        isUnique: false,
        isSparse: false,
        isPartial: false,
        indexVersion: 2,
        direction: 'forward',
        indexBounds: {
          ciudad: [
            '["San Miguel", "San Miguel"]'
          ],
          edad: [
            '[32, 32]'
          ]
        }
      }
    },
    rejectedPlans: [
      {
        isCached: false,
        stage: 'FETCH',
        filter: {
          edad: {
            '$eq': 32
          }
        },
        inputStage: {
          stage: 'IXSCAN',
          keyPattern: {
            ciudad: 1
          },
          indexName: 'ciudad_1',
          isMultiKey: false,
          multiKeyPaths: {
            ciudad: []
          },
          isUnique: false,
          isSparse: false,
          isPartial: false,
          indexVersion: 2,
          direction: 'forward',
          indexBounds: {
            ciudad: [
              '["San Miguel", "San Miguel"]'
            ]
          }
        }
      }
    ]
  },
  executionStats: {
    executionSuccess: true,
    nReturned: 2,
    executionTimeMillis: 31,
    totalKeysExamined: 2,
    totalDocsExamined: 2,
    executionStages: {
      isCached: true,
      stage: 'FETCH',
      nReturned: 2,
      executionTimeMillisEstimate: 0,
      works: 4,
      advanced: 2,
      needTime: 0,
      needYield: 0,
      saveState: 0,
      restoreState: 0,
      isEOF: 1,
      docsExamined: 2,
      alreadyHasObj: 0,
      inputStage: {
        stage: 'IXSCAN',
        nReturned: 2,
        executionTimeMillisEstimate: 0,
        works: 3,
        advanced: 2,
        needTime: 0,
        needYield: 0,
        saveState: 0,
        restoreState: 0,
        isEOF: 1,
        keyPattern: {
          ciudad: 1,
          edad: 1
        },
        indexName: 'ciudad_1_edad_1',
        isMultiKey: false,
        multiKeyPaths: {
          ciudad: [],
          edad: []
        },
        isUnique: false,
        isSparse: false,
        isPartial: false,
        indexVersion: 2,
        direction: 'forward',
        indexBounds: {
          ciudad: [
            '["San Miguel", "San Miguel"]'
          ],
          edad: [
            '[32, 32]'
          ]
        },
        keysExamined: 2,
        seeks: 1,
        dupsTested: 0,
        dupsDropped: 0
      }
    }
  },
  queryShapeHash: '788E9A27B650CBB8F5811F6DCC927A60E241359E6685A7599CD1F036AECC294E',
  command: {
    find: 'empleados',
    filter: {
      ciudad: 'San Miguel',
      edad: 32
    },
    '$db': 'unab'
  },
  serverInfo: {
    host: 'Ricardo',
    port: 27017,
    version: '8.0.8',
    gitVersion: '7f52660c14217ed2c8d3240f823a2291a4fe6abd'
  },
  serverParameters: {
    internalQueryFacetBufferSizeBytes: 104857600,
    internalQueryFacetMaxOutputDocSizeBytes: 104857600,
    internalLookupStageIntermediateDocumentMaxSizeBytes: 104857600,
    internalDocumentSourceGroupMaxMemoryBytes: 104857600,
    internalQueryMaxBlockingSortMemoryUsageBytes: 104857600,
    internalQueryProhibitBlockingMergeOnMongoS: 0,
    internalQueryMaxAddToSetBytes: 104857600,
    internalDocumentSourceSetWindowFieldsMaxMemoryBytes: 104857600,
    internalQueryFrameworkControl: 'trySbeRestricted',
    internalQueryPlannerIgnoreIndexWithCollationForRegex: 1
  },
  ok: 1
}