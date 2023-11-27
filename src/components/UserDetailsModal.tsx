import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {UserObject} from '../../store/usersSlice';
import {Fragment, SetStateAction} from 'react';

const screenWidth = Dimensions.get('window').width;
const screenHight = Dimensions.get('window').height;
interface UserDetailsModal {
  userIndex: number;
  setShowModal: React.Dispatch<SetStateAction<boolean>>;
}
const UserDetailsModal: React.FC<UserDetailsModal> = ({
  userIndex,
  setShowModal,
}) => {
  const user = useSelector((state: UserObject) => state.user.at(userIndex));

  return (
    <View style={styles.root}>
      <Pressable onPress={() => setShowModal(false)}>
        <View style={styles.backDrop}></View>
      </Pressable>
      <View style={styles.modal}>
        {user &&
          Object.entries(user).map(([user, value]) => (
            <View style={{flexDirection: 'row', marginVertical: 3}} key={user}>
              <Text>{user} : </Text>
              <Text>{value}</Text>
            </View>
          ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    width: screenWidth,
    height: screenHight,
    zIndex: 2,
  },
  backDrop: {
    height: '100%',
    width: '100%',
    backgroundColor: '#1f2937',
    opacity: 0.6,
  },
  modal: {
    position: 'absolute',
    backgroundColor: '#f5f5f5',
    padding: 10,
    top: '30%',
    left: 0,
    right: 0,
    borderRadius: 10,
    width: '80%',
    transform: [{translateX: 50}],
  },
});
export {UserDetailsModal};
