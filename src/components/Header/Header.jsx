import { View, Text } from 'react-native';

export default Header = ({title, buttonLeft, buttonRight}) => {
	return (
		<View>
			{buttonLeft}
			<Text>{title}</Text>
			{buttonRight}
		</View>
	);
}
