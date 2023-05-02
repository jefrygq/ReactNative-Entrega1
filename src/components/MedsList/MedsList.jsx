import { View, Text, StyleSheet, FlatList } from 'react-native';
import MedsListItem from '../MedsListItem/MedsListItem';

export default MedsList = (meds) => {
	const renderItem = ({item}) => (
		<MedsListItem name={item.name} />
	);

	return (
		<View style={styles.container}>
			<FlatList 
				data={meds} 
				renderItem={renderItem} 
				keyExtractor={item => item} 
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	}
});
