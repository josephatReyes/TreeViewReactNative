import React, { Component, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styleNode from './nodeStyle';
import IconMenos from '../../assets/img/icon-close.svg';
import IconMas from '../../assets/img/icon-open.svg';
import IconNoAlarms from '../../assets/img/icon-no-alarms.svg';
import IconShip from '../../assets/img/icon-ship.svg';
import IconAntenna from '../../assets/img/icon-antenna.svg';
import IconProduct from '../../assets/img/icon-product.svg';
/**
* 
* Node is an single elemento into the treeview component
*@constructor 
*@param {string }       label The text will be showed 
*@param {string}        idkey The key to link a context menu its UNIQUE
*@param {number}        leafs List of options into the menuContext
*@param {boolean}       circles To display the circles 
*@param {number}        red To display in red circle
*@param {number}        gren To display in green circle
*@param {number}        yellow To display in yellow circle
*@param {number}        gray To display in gray circle
*@param {bold}          bold  To ddisplay the label in bold
*@param {hasChildren}   hasChildren To display de menus to hide and show the children
*@param {string}        textColor To display on a different color the label  
*@param {boolean}       icon If the add or less must be showed
*@param {string}        iconClass ClassName for the icon
*@param {boolean}       toggled If is toggled or not 
*@param {function}      toggleEvent Event to control de toggle event
*@param {function}      onceClick Event after a single click 
*@param {Object}        labelStyle  Object with the Style for a label

*/

const Node = (props) => {
	// console.log("Imprimiemdo props--->", props)
	const [ selected, setSelected ] = useState(false);

	const markAsSelect = () => {
		//	setSelected(!selected);
	};

	const RenderIcon = (props) => {
		switch (props.iconName) {
			case 'no-alarms':
				return <IconNoAlarms />;
				break;

			case 'icon-ship':
				return <IconShip />;
				break;

			case 'icon-anthena':
				return <IconAntenna />;

				break;

			case 'icon-product':
				return <IconProduct />;
				break;
			default:
				return null;
		}
	};
	return (
		<View style={[ styleNode.container ]}>
			{selected ? <View style={styleNode.borderLeft} /> : <View />}

			<TouchableOpacity
				onPress={(e) => {
					e.preventDefault();
					props.clickEvent('EventClicked');
				}}
				onLongPress={(e) => {
					e.preventDefault();
					props.longPressEvent('longPressClicked');
				}}
			>
				<View style={styleNode.nodeCtn}>
					<View style={styleNode.label}>
						{props.iconClass !== '' ? (
							<View style={props.labelStyle} >
								<RenderIcon iconName={props.iconClass.className} />
							</View>
						) : null}
						<Text style={[props.labelStyle, {marginLeft: 10}]}>
							{props.label + ' '}
							{props.leafs > 0 ? '(' + props.leafs + ')' : ''}
						</Text>
					</View>

					{props.circles ? (
						<View style={styleNode.circlesCtn}>
							<TouchableOpacity
								onPress={(e) => {
									e.stopPropagation();
								}}
								disabled={props.yellow === 0 ? true : false}
							>
								<View
									style={
										props.yellow === 0 ? (
											[ styleNode.circle, styleNode.yellow, styleNode.inactive ]
										) : (
											[ styleNode.circle, styleNode.yellow ]
										)
									}
								>
									<Text style={styleNode.textCircleYellow}>
										{props.yellow.toString().length > 2 ? '99' : props.yellow}
									</Text>
								</View>
							</TouchableOpacity>

							<TouchableOpacity
								onPress={(e) => {
									e.stopPropagation();
								}}
								disabled={props.green === 0 ? true : false}
							>
								<View
									style={
										props.green === 0 ? (
											[ styleNode.circle, styleNode.green, styleNode.inactive ]
										) : (
											[ styleNode.circle, styleNode.green ]
										)
									}
								>
									<Text style={styleNode.textCircle}>
										{props.green.toString().length > 2 ? '99' : props.green}
									</Text>
								</View>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={(e) => {
									e.stopPropagation();
								}}
								disabled={props.red === 0 ? true : false}
							>
								<View
									style={
										props.red === 0 ? (
											[ styleNode.circle, styleNode.red, styleNode.inactive ]
										) : (
											[ styleNode.circle, styleNode.red ]
										)
									}
								>
									<Text style={styleNode.textCircle}>
										{props.red.toString().length > 2 ? '99' : props.red}
									</Text>
								</View>
							</TouchableOpacity>

							<TouchableOpacity
								onPress={(e) => {
									e.stopPropagation();
								}}
								disabled={props.gray === 0 ? true : false}
							>
								<View
									style={
										props.gray === 0 ? (
											[ styleNode.circle, styleNode.gray, styleNode.inactive ]
										) : (
											[ styleNode.circle, styleNode.gray ]
										)
									}
								>
									<Text style={styleNode.textCircle}>
										{props.gray.toString().length > 2 ? '99' : props.gray}
									</Text>
								</View>
							</TouchableOpacity>
						</View>
					) : (
						<View style={styleNode.circlesCtn} />
					)}

					{props.hasChildren ? props.toggled ? (
						<TouchableOpacity
							onPress={(e) => {
								e.stopPropagation();
								markAsSelect();
								props.toggleEvent();
							}}
						>
							<View style={styleNode.iconCtn}>
								<IconMenos width="15px" height="15px" />
							</View>
						</TouchableOpacity>
					) : (
						<TouchableOpacity
							onPress={(e) => {
								e.stopPropagation();
								markAsSelect();
								props.toggleEvent();
							}}
						>
							<View style={styleNode.iconCtn}>
								<IconMas width="15px" height="15px" />
							</View>
						</TouchableOpacity>
					) : (
						<View style={styleNode.iconCtn} />
					)}
				</View>
			</TouchableOpacity>
			{typeof props.children === 'string' ? (
				<Text style={styleNode.emptyText}>{props.children}</Text>
			) : (
				<View
					style={
						props.toggled ? (
							[ styleNode.child, styleNode.visibleTop ]
						) : (
							[ styleNode.child, styleNode.inVisibleBottom ]
						)
					}
				>
					{props.children}
				</View>
			)}
		</View>
	);
};


export default Node;
