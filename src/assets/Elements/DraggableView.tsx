import Animated, {
  clamp,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {Dimensions, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

interface IDraggableViewProps {
  children: any;
  containerStyle?: ViewStyle | ViewStyle[];
  style?: TextStyle | TextStyle[];
}

const {width, height} = Dimensions.get('screen');

//Form more better understanding of code follow https://docs.swmansion.com/react-native-gesture-handler/docs/gestures/pan-gesture

const DraggableView = (props: IDraggableViewProps) => {
  const {children, containerStyle, style} = props;

  const translationX = useSharedValue(0); // Initial position in X direction
  const translationY = useSharedValue(0); // Initial position in Y direction
  const prevTranslationX = useSharedValue(0); // Initial previous position in X direction
  const prevTranslationY = useSharedValue(0); // Initial previous position in Y direction

  const panGesture = Gesture.Pan()
    .minDistance(1)
    .onStart(() => {
      prevTranslationX.value = translationX.value;
      prevTranslationY.value = translationY.value;
    })
    .onUpdate(event => {
      const maxTranslateX = width;
      const maxTranslateY = height;

      translationX.value = clamp(
        prevTranslationX.value + event.translationX,
        -maxTranslateX,
        maxTranslateX,
      );

      translationY.value = clamp(
        prevTranslationY.value + event.translationY,
        -maxTranslateY,
        maxTranslateY,
      );
    });

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: translationX.value},
        {translateY: translationY.value},
      ],
    };
  });

  return (
    <GestureHandlerRootView style={[styles.container, {...containerStyle}]}>
      <GestureDetector gesture={panGesture}>
        <Animated.View style={[animatedStyles, {...style}]}>
          {children}
        </Animated.View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DraggableView;
