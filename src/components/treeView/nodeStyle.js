import { StyleSheet } from 'react-native';
import { red, green } from 'ansi-colors';
const styleNode = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		flexDirection: 'column',
    justifyContent: 'space-between',
  
		// borderBottomColor: "#DCDCDC", borderBottomWidth: 2
	},

	nodeCtn: {
		backgroundColor: '#fff',
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderBottomColor: '#DCDCDC',
		borderBottomWidth: 2
	},
	borderLeft: {
		height: 70,
		backgroundColor: '#EF7622',
		width: '1%'
	},

	label: {
		width: '55%',

		flexDirection: 'row',
		alignItems: 'center'
	},
	textlabel: {
		fontSize: 12,
		fontWeight: '600',
		lineHeight: 17
	},
	circlesCtn: {
		width: '33%',
		//		backgroundColor: 'blue',
		height: 70,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	iconCtn: {
		width: '25%',
		height: 70,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		//backgroundColor:'purple',
		marginLeft: 10
	},
	circle: {
		width: 25,
		height: 25,
		borderRadius: 25 / 2,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	textCircle: {
		color: '#fff'
	},
	textCircleYellow: {
		color: '#5F4B00'
	},
	green: { backgroundColor: '#44AB00' },
	yellow: { backgroundColor: '#FFCB00' },
	gray: { backgroundColor: '#989898' },
	red: { backgroundColor: '#FF1919' },
inactive:{
  opacity:0.4,
},
	//For children content

	child: {
		width: '100%'
	},
	visibleTop: {
		position: 'relative',
		top: 0,
		display: 'flex'
	},
	inVisibleBottom: {
		position: 'relative',

		display: 'none'
  },
  
  emptyText:{
    backgroundColor: "green",
    display: "none"
  }
});

export default styleNode;

{
	/* 
            .child {
  width: 100%;
  padding: 0px 0px 0px 0px;
  transition: all 0.1s;
  max-height: auto;
  text-indent: 5px;
}
.visible-top {
  position: relative;
  top: 0px;
  display: block;
  overflow-y: hidden;
}

.visible-bottom {
  position: relative;
  top: -250px;
  display: none;
} */
}
