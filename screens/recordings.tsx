import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Dummy data
const recordings = [
    { id: '1', title: 'Recording 1', date: '2025-01-15', duration: '2:45' },
    { id: '2', title: 'Recording 2', date: '2025-01-14', duration: '5:23' },
    { id: '3', title: 'Recording 3', date: '2025-01-13', duration: '3:12' },
];

const RecordingsScreen: React.FC = () => {
    const [selectedRecording, setSelectedRecording] = useState<string | null>(null);

    const handleSelectRecording = (id: string) => {
        setSelectedRecording(prev => (prev === id ? null : id));
    };

    const renderItem = ({ item }: { item: { id: string; title: string; date: string; duration: string } }) => {
        const isExpanded = selectedRecording === item.id;

        return (
            <View style={styles.recordingContainer}>
                <TouchableOpacity style={styles.recordingTitle} onPress={() => handleSelectRecording(item.id)}>
                    <View>
                        <Text style={styles.recordingText}>{item.title}</Text>
                        <Text style={styles.recordingDate}>{item.date}</Text>
                    </View>
                    <Text style={styles.recordingDuration}>{item.duration}</Text>
                </TouchableOpacity>

                {isExpanded && (
                    <View style={styles.actionsContainer}>
                        <TouchableOpacity style={styles.actionButton}>
                            <Icon name="play-outline" size={20} color="#FFFFFF" />
                            <Text style={styles.actionText}>Play</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actionButton}>
                            <Icon name="trash-outline" size={20} color="#FFFFFF" />
                            <Text style={styles.actionText}>Delete</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actionButton}>
                            <Icon name="cloud-upload-outline" size={20} color="#FFFFFF" />
                            <Text style={styles.actionText}>Export</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Recordings</Text>
            <FlatList data={recordings} renderItem={renderItem} keyExtractor={item => item.id} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C1C1E',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom: 20,
    },
    recordingContainer: {
        backgroundColor: '#333',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
    },
    recordingTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    recordingText: {
        fontSize: 16,
        color: '#FFFFFF',
    },
    recordingDate: {
        fontSize: 14,
        color: '#888',
    },
    recordingDuration: {
        fontSize: 14,
        color: '#FFFFFF',
    },
    actionsContainer: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#4CD964',
        padding: 10,
        borderRadius: 8,
    },
    actionText: {
        marginLeft: 5,
        color: '#FFFFFF',
    },
});

export default RecordingsScreen;
