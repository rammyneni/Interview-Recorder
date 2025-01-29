import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen: React.FC = () => {
    const [isRecording, setIsRecording] = useState(false); // Track recording state
    const [isPaused, setIsPaused] = useState(false); // Track pause/resume state

    const handleStartRecording = () => {
        setIsRecording(true);
        setIsPaused(false);
        console.log("Recording started!");
    };

    const handlePause = () => {
        setIsPaused(true);
        console.log("Recording paused!");
    };

    const handleResume = () => {
        setIsPaused(false);
        console.log("Recording resumed!");
    };

    const handleStop = () => {
        setIsRecording(false);
        setIsPaused(false);
        console.log("Recording stopped!");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Interview Recorder</Text>

            {!isRecording ? (
                // Initial state: Start recording button
                <TouchableOpacity style={styles.circleButton} onPress={handleStartRecording}>
                    <Text style={styles.buttonText}>Start Recording</Text>
                </TouchableOpacity>
            ) : (
                // Recording state: Timer, pause/resume, and stop buttons
                <View style={styles.recordingContainer}>
                    <View style={styles.recordingIndicator}>
                        <View style={styles.recordingDot}></View>
                        <Text style={styles.recordingText}>
                            {isPaused ? "Paused" : "Recording..."}
                        </Text>
                    </View>
                    <View style={styles.buttonsContainer}>
                        {!isPaused ? (
                            <TouchableOpacity style={styles.pauseButton} onPress={handlePause}>
                                <Text style={styles.buttonText}>Pause</Text>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity style={styles.resumeButton} onPress={handleResume}>
                                <Text style={styles.buttonText}>Resume</Text>
                            </TouchableOpacity>
                        )}
                        <TouchableOpacity style={styles.stopButton} onPress={handleStop}>
                            <Text style={styles.buttonText}>Stop</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C1C1E', // Dark background
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 30,
    },
    circleButton: {
        width: 150,
        height: 150,
        borderRadius: 75,
        backgroundColor: '#FF3B30',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    recordingContainer: {
        alignItems: 'center',
    },
    recordingIndicator: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    recordingDot: {
        width: 15,
        height: 15,
        borderRadius: 7.5,
        backgroundColor: 'red',
        marginRight: 10,
    },
    recordingText: {
        fontSize: 18,
        color: '#FFFFFF',
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 20,
    },
    pauseButton: {
        backgroundColor: '#FFD700', // Yellow for Pause
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginRight: 10,
    },
    resumeButton: {
        backgroundColor: '#1E90FF', // Blue for Resume
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginRight: 10,
    },
    stopButton: {
        backgroundColor: '#FF3B30', // Red for Stop
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
});

export default HomeScreen;
