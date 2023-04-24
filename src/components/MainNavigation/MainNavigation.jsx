import { View, Text, StyleSheet, Image } from 'react-native';

export default MainNavigation = () => {
	return (
		<View style={styles.navContainer}>
			<View>
        <Image source={require('../../../assets/icon.png')} style={styles.image} />
        <Text>Tomas</Text>
      </View>
			<View>
        <Image source={require('../../../assets/icon.png')} style={styles.image} />
        <Text>Medicamentos</Text>
      </View>
			<View>
        <Image source={require('../../../assets/icon.png')} style={styles.image} />
        <Text>Añadir</Text>
      </View>
			<View>
        <Image source={require('../../../assets/icon.png')} style={styles.image} />
        <Text>Historial</Text>
      </View>
			<View>
        <Image source={require('../../../assets/icon.png')} style={styles.image} />
        <Text>Configuracion</Text>
      </View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fffccc',
		alignItems: 'center',
		paddingVertical: 40,
		paddingHorizontal: 20
	},
	internalContainer: {
		backgroundColor: "white", 
		padding: 20,
		width: '100%'
	},
	rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
	},
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'darkgray',
    padding: 10
	},
	input: {
    flex: 1,
    borderBottomColor:"gray", 
    borderBottomWidth: 2, 
    padding: 10,
    margin: 10
	},
	image: {
    width: 50,
    height: 50,
    alignItems: 'center',
	}
});