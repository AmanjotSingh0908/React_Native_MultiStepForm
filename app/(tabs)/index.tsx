import { useState } from "react";
import { Image, StyleSheet, Platform, View, Text, TextInput } from "react-native";

import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

export default function HomeScreen() {
  const [step1Data, setStep1DataFormat] = useState({name: '', address: ''});
  const [step2Data, setStep2DataFormat] = useState({email: '', username: ''});
  const [step3Data, setStep3DataFormat] = useState({password: '', retypePassword: ''});

  return (
    <View style={styles.Container}>
      <ProgressSteps>
        <ProgressStep label="Step 1">
            <View style={styles.stepContent}>
                <Text style = {styles.labelText}>Name</Text>
                <TextInput style={styles.input} 
                placeholder="Name"
                value={step1Data.name}
                onChangeText={text =>  setStep1DataFormat({...step1Data, name : text})}
                />
                <Text style = {styles.labelText}>Address</Text>
                <TextInput style={styles.input} 
                placeholder="Address"
                value={step1Data.address}
                onChangeText={text =>  setStep1DataFormat({...step1Data, address : text})}
                />
            </View>
        </ProgressStep>

        <ProgressStep label="Step 2">
            <View style={styles.stepContent}>
                <Text style = {styles.labelText}>Email</Text>
                <TextInput style={styles.input} 
                placeholder="Email"
                value={step2Data.email}
                onChangeText={text =>  setStep2DataFormat({...step2Data, email : text})}
                />
                <Text style = {styles.labelText}>Username</Text>
                <TextInput style={styles.input} 
                placeholder="Username"
                value={step2Data.username}
                onChangeText={text =>  setStep2DataFormat({...step2Data, username : text})}
                />
            </View>
        </ProgressStep>

        <ProgressStep label="Step 3">
            <View style={styles.stepContent}>
                <Text style = {styles.labelText}>Password</Text>
                <TextInput style={styles.input} 
                placeholder="Password"
                value={step3Data.password}
                onChangeText={text =>  setStep3DataFormat({...step3Data, password : text})}
                />
                <Text style = {styles.labelText}>Address</Text>
                <TextInput style={styles.input} 
                placeholder="Re Type Password"
                value={step3Data.password}
                onChangeText={text =>  setStep3DataFormat({...step3Data, password : text})}
                /><TextInput style={styles.input} />
            </View>
        </ProgressStep>
    </ProgressSteps>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 20,
  },
  stepContent :{

  }, 
  labelText: {
    fontSize: 16
  },
  input: {
    width: '100%',
    height:50,
    backgroundColor: '#e8f5e9',
    borderRadius:10,
    paddingHorizontal: 15,
    marginBottom : 10,
    marginTop: 10,
  }
});
