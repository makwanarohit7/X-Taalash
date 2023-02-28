import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const DateTimePickerExample = () => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(false);
    setDate(currentDate);
  };

  const showDateTimePicker = () => {
    setShowPicker(true);
  };

  return (
    <View>
      <TouchableOpacity onPress={showDateTimePicker}>
        <Text style={styles.text}>{date.toLocaleString()}</Text>
      </TouchableOpacity>
      {showPicker && (
        <DateTimePicker value={date} mode="datetime" display="default" />
      )}
    </View>
  );
};

export default DateTimePickerExample;
const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 40,
  },
});
// This is For Click on Button Then Alert The App

// import React, { useEffect, useState } from "react";
// import { Text, View, TouchableOpacity } from "react-native";

// const DateTimePickerExample = () => {
//   const [showDateTime, setShowDateTime] = useState(false);

//   useEffect(() => {
//     setShowDateTime(true);
//   }, []);

//   const handleCurrentDateTimeButtonPress = () => {
//     const currentDate = new Date();

//     alert(`Current date and time: ${currentDate.toLocaleString()}`);
//   };

//   return (
//     <View>
//       {showDateTime && (
//         <TouchableOpacity onPress={handleCurrentDateTimeButtonPress}>
//           <Text>Get current date and time</Text>
//         </TouchableOpacity>
//       )}
//     </View>
//   );
// };

// export default DateTimePickerExample;
