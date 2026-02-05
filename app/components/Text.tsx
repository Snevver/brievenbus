import { Text as RNText, TextProps, StyleSheet } from 'react-native';
import { fonts } from '../config/fonts';

export function Text({ style, ...props }: TextProps) {
    return <RNText style={[styles.default, style]} {...props} />;
}

const styles = StyleSheet.create({
    default: {
        fontFamily: fonts.regular,
    },
});

export default Text;
