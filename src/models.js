export const models = [
  {
    id: 1,
    name: 'T-X',
    serialNumber: 17856325,
  },
  {
    id: 2,
    name: 'T-reX',
    serialNumber: 45237841,
  },
  {
    id: 3,
    name: 'GS-600',
    serialNumber: 98521475,
  },
  {
    id: 4,
    name: '4REP',
    serialNumber: 14527410,
  },
  {
    id: 5,
    name: 'SAP-1',
    serialNumber: 10000001,
  },
  {
    id: 6,
    name: 'SAP-1.1',
    serialNumber: 10000002,
  },
  {
    id: 7,
    name: 'SAP-1.2',
    serialNumber: 10000003,
  },
];

for (let i = 0; i < 30; i++) {
  models.push({
    id: '1' + i,
    name: 'SAP-1-' + i,
    serialNumber: 1000000 + i,
  });
}
