import { DataTable } from 'react-native-paper';
import { StyleSheet, Text, View, FlatList, ScrollView, Dimensions } from 'react-native';
import { credentials } from './Profiles.js';

const sWidth = Dimensions.get("window").width;
const sHeigth = Dimensions.get("window").height;

export default function App() {
  const students = credentials.filter(item => item.userType == 'Student');

  const Items = ({item}) => {
    return (
      <DataTable.Row style={styles.tableBorder}>
        <DataTable.Cell>{item.id}</DataTable.Cell>
        <DataTable.Cell>{item.name.fName} {item.name.lName}</DataTable.Cell>
        <DataTable.Cell>{item.course}</DataTable.Cell>
      </DataTable.Row>
    );
  }

  return (
    <DataTable style={styles.container}>
      <View style={styles.tableContainer}>

        <DataTable.Header>
          <DataTable.Title style={{justifyContent: 'center'}}>
            <Text style = {styles.tableTitles}>Accounts</Text>
          </DataTable.Title>
        </DataTable.Header>

        <DataTable.Header style={styles.tableBorder}>
          <DataTable.Title><Text style={styles.tableHeader}>ID</Text></DataTable.Title>
          <DataTable.Title><Text style={styles.tableHeader}>Username</Text></DataTable.Title>
          <DataTable.Title><Text style={styles.tableHeader}>Password</Text></DataTable.Title>
          <DataTable.Title><Text style={styles.tableHeader}>User Type</Text></DataTable.Title>
        </DataTable.Header>

        {credentials.map((list)=>(
          <DataTable.Row  style ={styles.tableBorder} key={list.id} >
          <DataTable.Cell>{list.id}</DataTable.Cell>
          <DataTable.Cell>{list.userName}</DataTable.Cell>
          <DataTable.Cell>{list.password}</DataTable.Cell>
          <DataTable.Cell>{list.userType}</DataTable.Cell>   
        </DataTable.Row>
        ))}
      </View>

      <View style={styles.tableContainer}>

        <DataTable.Header>     
          <DataTable.Title style = {{justifyContent: 'center'}}>
            <Text style = {styles.tableTitles}>Users</Text>
          </DataTable.Title>
        </DataTable.Header>

        <DataTable.Header style = {styles.tableBorder}>
          <DataTable.Title><Text style = {styles.tableHeader}>ID</Text></DataTable.Title>
          <DataTable.Title><Text style = {styles.tableHeader}>First Name</Text></DataTable.Title>
          <DataTable.Title><Text style = {styles.tableHeader}>Last Name</Text></DataTable.Title>
          <DataTable.Title><Text style = {styles.tableHeader}>Course</Text></DataTable.Title>
          <DataTable.Title><Text style = {styles.tableHeader}>Year and Section</Text></DataTable.Title>
        </DataTable.Header>

        <ScrollView> 
        {credentials.map((list)=>(
          <DataTable.Row  style ={styles.tableBorder} key={list.id} >
            <DataTable.Cell>{list.id}</DataTable.Cell>
            <DataTable.Cell>{list.name.fName}</DataTable.Cell>
            <DataTable.Cell>{list.name.lName}</DataTable.Cell>
            <DataTable.Cell>{list.course}</DataTable.Cell>
            <DataTable.Cell>{list.yearSection}</DataTable.Cell>   
          </DataTable.Row>
        ))}
        </ScrollView>
      </View>

      <View style={styles.tableContainer}>

        <DataTable.Header>     
          <DataTable.Title style = {{justifyContent: 'center'}}>
            <Text style = {styles.tableTitles}>Students</Text>
          </DataTable.Title>
        </DataTable.Header>

        <DataTable.Header style = {styles.tableBorder}>
          <DataTable.Title><Text style = {styles.tableHeader}>ID</Text></DataTable.Title>
          <DataTable.Title><Text style = {styles.tableHeader}>Name</Text></DataTable.Title>
          <DataTable.Title><Text style = {styles.tableHeader}>Course</Text></DataTable.Title>
        </DataTable.Header> 

        <FlatList   
          data = {students}
          renderItem = {Items}
          keyExtractor = {item => item.id}/> 
      </View>
    </DataTable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height: sHeigth * 1,
    width: sWidth,
    padding: 30,
  },
  tableContainer:{
    padding:20,
    marginBottom:40
  },
  tableBorder: {
    borderWidth: 3,
    borderColor: 'black',
    borderStyle: 'solid', 
  },
  tableHeader: {
    textTransform: 'uppercase',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fc8c03',
  },
  tableTitles: {
    textTransform: 'uppercase',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    color: '#7500fa',
  },
});
