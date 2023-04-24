import { View, Text, StyleSheet } from 'react-native';

export default Header = ({title, buttonLeft, buttonRight}) => {
	return (
		<View style={styles.headerContainer}>
			{buttonLeft}
			<Text style={styles.headerTitle}>{title}</Text>
			{buttonRight}
		</View>
	);
}

const styles = StyleSheet.create({
	headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
	},
	headerTitle: {
    flex: 1,
    textAlign: 'left',
    padding: 10,
    margin: 10
	},
	headerButton: {
    width: 50,
    height: 50
	}
});
