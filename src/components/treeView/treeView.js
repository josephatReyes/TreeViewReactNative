import React, { Component, useState, useEffect, useRef } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import styleTreeView from './treeViewStyles';
import Node from './node';
import IconTracing from '../../assets/img/icon-tracking.svg';
import IconTrends from '../../assets/img/icon-trends.svg';
import IconNoAlarms from '../../assets/img/icon-no-alarms.svg';
//Action sheet

import { ActionSheetCustom as ActionSheet } from 'react-native-actionsheet';

/**
 *  Treeview is the component where all nodes will be render
 * @constructor
 * @param {array} data Tree with the differents levels 
 * @param {function} clickEvent this will execute after a single press
 * @param {function} longPressEvent  this will execute after a long press
 * @param {function} tilterByStatusEvent this will execute after a press in a circle
 * @param {function} toggleEvent   this will execute after a toggle
 * @param {array} actionSheetOpts    Options for the actionSheet
 * @param {function}selectActionOptEvent after select an option
 *
 */

const TreeView = (props) => {
	const [ data, setData ] = useState(props.data);
	const [ makechanges, setChanges ] = useState(false);
	const [ optSelected, setOptSelected ] = useState(null);
	const picker = useRef(null);

	const _ActionSheetOptStyle = { color: 'black', textAlign: 'left', paddingLeft: 20 };
	const _ActionSheetViewStyle = { width: '100%', flexDirection: 'row', alignItems: 'center', paddingLeft: 15 };
	const options = [
		<View key="Cancel" style={{ color: 'red' }}>
			<Text style={{ color: 'red' }}>Cancel</Text>
		</View>,
		<View key="Trends" style={_ActionSheetViewStyle}>
			<IconTracing width="15px" height="15px" />
			<Text style={_ActionSheetOptStyle}>Trends</Text>
		</View>,
		<View key="Tracking" style={_ActionSheetViewStyle}>
			<IconTrends width="15px" height="15px" />
			<Text style={_ActionSheetOptStyle}>Tracking</Text>
		</View>,

		<View key="SatelliteOpt" style={_ActionSheetViewStyle}>
			<IconNoAlarms width="15px" height="15px" />
			<Text style={_ActionSheetOptStyle}>Satellite Footprint</Text>
		</View>,

		<View key="Teleport" style={_ActionSheetViewStyle}>
			<IconNoAlarms width="15px" height="15px" />
			<Text style={_ActionSheetOptStyle}>Teleport </Text>
		</View>
	];

	useEffect(
		() => {
			setData(props.data);
		},
		[ props.data ]
	);

	useEffect(
		() => {
			if (optSelected != null) {
				showActionSheet();
			}
		},
		[ optSelected ]
	);
	const showActionSheet = () => {
		picker.current.show();
	};

	const toggleFather = (node, index) => {
		let algo = [ ...data ];
		algo[index].toggled = !algo[index].toggled;
		setData(algo);
	};

	// this function render all nodes into the tree
	const drawNodes = (node) => {

		return (
			<Node
				label={node.name}
				idkey={node.name}
				key={node.name + Math.random()}
				toggled={node.toggled}
				labelStyle={node.labelStyle}
				icon={node.withIcon}
				iconClass={node.icon ? node.icon : ''}
				circles={node.withCircles}
				leafs={node.children ? node.children.length : 0}
				yellow={node.yellow ? node.yellow : 0}
				green={node.green ? node.green : 0}
				red={node.red ? node.red : 0}
				gray={node.gray ? node.gray : 0}
				hasChildren={node.children ? node.children.length > 0 ? true : false : false}
				clickEvent={(event) => {
					if (node.children) {
						//showActionSheet();
						if (node.children.length > 0) {
							node.toggled = !node.toggled;
							setChanges(!makechanges);

							if (props.toggleEvent) {
								props.toggleEvent(node);
							}
						}
					}

					if (props.clickEvent) {
						props.clickEvent(node);
					}
				}}
				longPressEvent={(event) => {
					if (node.enableActSheet) {
						setOptSelected(node);
					}
					if (props.longPressEvent) {
						props.longPressEvent(node);
					}
				}}
				toggleEvent={() => {
					node.toggled = !node.toggled;
					setChanges(!makechanges);
					if (props.toggleEvent) {
						props.toggleEvent(node);
					}
				}}
			>
				{node.children ? node.children.length > 0 ? (
					node.children.map((nodeItem, index) => {
						return (
							<Node
								key={nodeItem.name + index}
								label={nodeItem.name}
								idkey={'id-' + nodeItem.name + index}
								toggled={nodeItem.toggled}
								icon={nodeItem.withIcon}
								labelStyle={nodeItem.labelStyle}
								hasChildren={nodeItem.children ? nodeItem.children.length > 0 ? true : false : false}
								leafs={nodeItem.children ? nodeItem.children.length : 0}
								iconClass={nodeItem.icon ? nodeItem.icon : ''}
								circles={nodeItem.withCircles}
								yellow={nodeItem.yellow ? nodeItem.yellow : 0}
								green={nodeItem.green ? nodeItem.green : 0}
								red={nodeItem.red ? nodeItem.red : 0}
								gray={nodeItem.gray ? nodeItem.gray : 0}
								clickEvent={(event) => {
									if (nodeItem.children) {
										if (nodeItem.children.length > 0) {
											nodeItem.toggled = !nodeItem.toggled;
											setChanges(!makechanges);
											if (props.toggleEvent) {
												props.toggleEvent(nodeItem);
											}
										}
									}

									if (props.clickEvent) {
										props.clickEvent(nodeItem);
									}
									//showActionSheet();
								}}
								longPressEvent={(event) => {
									if (nodeItem.enableActSheet) {
										setOptSelected(nodeItem);
									}
									if (props.longPressEvent) {
										props.longPressEvent(nodeItem);
									}
								}}
								toggleEvent={() => {
									toggleFather(node, index);
									if (props.toggleEvent) {
										props.toggleEvent(nodeItem);
									}
								}}
								toggleEvent={() => {
									nodeItem.toggled = !nodeItem.toggled;
									setChanges(!makechanges);
									//	setChanges(!makechanges);
								}}
							>
								{nodeItem.children ? (
									nodeItem.children.map((leaf, index) => {
										return (
											<View key={index + 'X'} style={{ width: '100%', backgroundColor: 'red' }}>
												{drawNodes(leaf)}
											</View>
										);
									})
								) : (
									''
								)}
							</Node>
						);
					})
				) : (
					''
				) : (
					''
				)}
			</Node>
		);
	};

	return (
		<View style={styleTreeView.container}>
			{data.map((node, index) => {
				return drawNodes(node);
			})}

			<ActionSheet
				ref={picker}
				options={options}
				cancelButtonIndex={0}
				destructiveButtonIndex={4}
				onPress={(index) => {
					/* do something */

					if (props.selectActionOptEvent) {
						props.selectActionOptEvent({
                            selectBy: optSelected,
                            optionSelected: options[index].key
                        });
                    }
                    setOptSelected(null);
				}}
			/>
		</View>
	);
};

export default TreeView;
