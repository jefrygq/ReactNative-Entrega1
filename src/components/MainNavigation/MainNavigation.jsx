import { View, Text, StyleSheet, Image } from 'react-native';

export default MainNavigation = () => {
	return (
		<View style={styles.navContainer}>
			<View style={styles.navItem}>
        <Image source={require('../../../assets/icon.png')} style={styles.navIcon} />
        <Text style={styles.navText}>Recordatorios</Text>
      </View>
			<View style={styles.navItem}>
        <Image source={require('../../../assets/icon.png')} style={styles.navIcon} />
        <Text style={styles.navText}>Medicinas</Text>
      </View>
			<View style={styles.navItem}>
        <Image source={require('../../../assets/icon.png')} style={styles.navIcon} />
        <Text style={styles.navText}>Añadir</Text>
      </View>
			<View style={styles.navItem}>
        <Image source={require('../../../assets/icon.png')} style={styles.navIcon} />
        <Text style={styles.navText}>Historial</Text>
      </View>
			<View style={styles.navItem}>
        <Image source={require('../../../assets/icon.png')} style={styles.navIcon} />
        <Text style={styles.navText}>Configuracion</Text>
      </View>
		</View>
	);
}

const styles = StyleSheet.create({
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
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#101010',
    padding: 10,
    paddingBottom: 20,
	},
  navItem: {
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
  },
  navText: { 
    fontSize: 8,
    color: 'white',
    paddingTop: 5,
  },
	navIcon: {
    width: 50,
    height: 50,
    alignItems: 'center',
	}
});