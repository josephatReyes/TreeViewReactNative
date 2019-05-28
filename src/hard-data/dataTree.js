export const DATA_TREE = [
	{
		name: 'Rignet',
		toggled: true,
		withIcon: true,
		withCircles: true,
		red: 10,
		green: 512,
		yellow: 100,
    gray: 12,
    enableActSheet: true,
  
		labelStyle: { color: '#EF7622', fontWeight: 'bold', fontSize: 18, marginLeft: 5 },
		children: [
			{
				name: 'Costumer',
				icon: {
					className: 'fas fa-video',
					style: { color: '#ef7622', fontSize: '14px', marginLeft: '15px' }
				},
				labelStyle: { color: 'black', fontWeight: '600', marginLeft: 20 },
				toggled: true,
        withCircles: true,
        enableActSheet: true,
				children: [
					{
						name: 'Entity 1',
						icon: {
							className: 'fas fa-video',
							style: { color: '#ef7622', fontSize: '14px', marginLeft: '15px' }
						},
						toggled: true,
            withCircles: false,
            enableActSheet: true,
						labelStyle: { color: 'black', fontWeight: '400', marginLeft: 35 },
						children: [{

							name: 'Site 1 E1 C1',
							icon: {
								className: 'icon-ship',
								style: { color: '#ef7622', fontSize: '14px', marginLeft: '15px' }
							},
							toggled: true,
              withCircles: false,
              enableActSheet: true,
							labelStyle: { color: 'black', fontWeight: '400', marginLeft: 50 },
						
						children:[
							{
								
							name: 'Service S1 E1 C1',
							icon: {
								className: 'icon-product',
								style: { color: '#ef7622', fontSize: '14px', marginLeft: '15px' }
							},
							toggled: false,
              withCircles: false,
              enableActSheet: true,
							labelStyle: { color: 'black', fontWeight: '400', marginLeft: 65 },
							children: [

								{
									name: 'Device Se1 S1 E1 C1',
							icon: {
								className: 'no-alarms',
								style: { color: '#ef7622', fontSize: '14px', marginLeft: '15px' }
							},
							toggled: false,
              withCircles: false,
              enableActSheet: true,
							labelStyle: { color: 'black', fontWeight: '400', marginLeft: 85 },
						
								}
							]
							}
						]
						},

						{

							name: 'Site 2 E1 C1',
							icon: {
								className: 'icon-anthena',
								style: { color: '#ef7622', fontSize: '14px', marginLeft: '15px' }
							},
							toggled: false,
              withCircles: false,
              enableActSheet: true,
							labelStyle: { color: 'black', fontWeight: '400', marginLeft: 50 },
						
						children:[
							{
								
							name: 'Service S1 E1 C1',
							icon: {
								className: 'icon-product',
								style: { color: '#ef7622', fontSize: '14px', marginLeft: '15px' }
							},
							toggled: false,
              withCircles: false,
              enableActSheet: true,
							labelStyle: { color: 'black', fontWeight: '400', marginLeft: 65 },
							children: [

								{
									name: 'Device Se1 S1 E1 C1',
							icon: {
								className: 'no-alarms',
								style: { color: '#ef7622', fontSize: '14px', marginLeft: '15px' }
							},
							toggled: false,
              withCircles: false,
              enableActSheet: true,
							labelStyle: { color: 'black', fontWeight: '400', marginLeft: 85 },
						
								}
							]
							}
						]
						}
						]
					}
				]
			},
			{
				name: 'Costumer 2',
				icon: {
					className: 'fas fa-video',
					style: { color: '#ef7622', fontSize: '14px', marginLeft: '15px' }
				},
				toggled: false,
				labelStyle: { color: 'black', fontWeight: '600', marginLeft: 20 },
				withCircles: false
			},
			{
				name: 'Costumer 3',
				icon: {
					className: 'fas fa-video',
					style: { color: '#ef7622', fontSize: '14px', marginLeft: '15px' }
				},
				toggled: false,
				labelStyle: { color: 'black', fontWeight: '600', marginLeft: 20 },
				withCircles: false
			},
			{
				name: 'Costumer 4',
				icon: {
					className: 'fas fa-video',
					style: { color: '#ef7622', fontSize: '14px', marginLeft: '15px' }
				},
				toggled: false,
				labelStyle: { color: 'black', fontWeight: '600', marginLeft: 20 },
				withCircles: false
			}
		]
	}
];
