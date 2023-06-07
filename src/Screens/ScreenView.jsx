import { View, ScrollView } from "react-native";

import screenStyles from './screenStyles';

export default ScreenView = ({children, noScroll}) => {
  return (
    noScroll ? (
      <View style={screenStyles.screenContainer}>
        {children}
      </View>
    ) : (
      <ScrollView>
        <View style={screenStyles.screenContainer}>
          {children}
        </View>
      </ScrollView>
    )
  );
};