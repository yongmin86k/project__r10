import React from "react";
import moment from "moment";
import {
  Platform,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image
} from "react-native";
import {
  BeautifulButton,
  Separator__Table,
  Typo__Default,
  Typo__Header
} from "../../components";
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";

const Session = ({
  data,
  faveIds,
  addFaveSession,
  removeFaveSession,
  navigation
}) => {
  const time = moment(data.startTime).format("hh:mm A");
  const isFave = faveIds.includes(data.id);

  return (
    <ScrollView style={styles.view}>
      <View style={styles.wrapHeader}>
        <Text style={styles.subHeader}>{data.location}</Text>
        {isFave ? (
          <Ionicons
            name={Platform.OS === "ios" ? "ios-heart" : "md-heart"}
            style={styles.iconHeart}
            size={24}
            color="red"
          />
        ) : null}
      </View>

      <Typo__Header>{data.title}</Typo__Header>
      <Text style={styles.time}>{time}</Text>
      <Typo__Default>{data.description}</Typo__Default>
      {data.speaker ? (
        <>
          <Text style={styles.presentedBy}>Presented by:</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Speaker", [data.speaker]);
            }}
          >
            <View style={styles.speakerView}>
              <Image
                style={styles.speakerImg}
                source={{ uri: data.speaker.image }}
              />
              <Text style={styles.speakerName}>{data.speaker.name}</Text>
            </View>
          </TouchableOpacity>
        </>
      ) : null}
      <Separator__Table />
      <TouchableOpacity
        onPress={() => {
          !isFave ? addFaveSession(data.id) : removeFaveSession(data.id);
        }}
      >
        <BeautifulButton>
          {!isFave ? "Add to Faves" : "Remove from Faves"}
        </BeautifulButton>
        {Platform.OS === "android" && <View style={styles.gap} />}
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Session;

Session.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.string,
    id: PropTypes.string,
    location: PropTypes.string,
    speaker: PropTypes.object,
    startTime: PropTypes.string,
    title: PropTypes.string
  }),
  faveIds: PropTypes.arrayOf(PropTypes.string),
  addFaveSession: PropTypes.func,
  removeFaveSession: PropTypes.func
};
