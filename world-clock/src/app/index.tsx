import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, StatusBar, useColorScheme } from 'react-native';

const TIMEZONES = [
  { label: 'New York', tz: 'America/New_York' },
  { label: 'London', tz: 'Europe/London' },
  { label: 'Tokyo', tz: 'Asia/Tokyo' },
  { label: 'Sydney', tz: 'Australia/Sydney' },
  { label: 'Paris', tz: 'Europe/Paris' },
  { label: 'Dubai', tz: 'Asia/Dubai' }
];

export default function WorldClock() {
  const [time, setTime] = useState(new Date());
  const isDark = useColorScheme() === 'dark';

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date, timezone: string) => {
    try {
      return new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }).format(date);
    } catch (e) {
      return '';
    }
  };

  const formatDate = (date: Date, timezone: string) => {
    try {
      return new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      }).format(date);
    } catch (e) {
      return '';
    }
  };
  
  const textColor = isDark ? '#ffffff' : '#111111';
  const cardBgColor = isDark ? '#222222' : '#ffffff';
  const bgColor = isDark ? '#000000' : '#f0f0f0';

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: bgColor }]}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={[styles.title, { color: textColor }]}>World Clock</Text>
          <Text style={[styles.subtitle, { color: textColor }]}>
            Local: {formatTime(time, Intl.DateTimeFormat().resolvedOptions().timeZone)}
          </Text>
        </View>

        {TIMEZONES.map((item, index) => (
          <View key={index} style={[styles.card, { backgroundColor: cardBgColor }]}>
            <View style={styles.cardLeft}>
              <Text style={[styles.city, { color: textColor }]}>{item.label}</Text>
              <Text style={styles.date}>{formatDate(time, item.tz)}</Text>
            </View>
            <View style={styles.cardRight}>
              <Text style={[styles.time, { color: textColor }]}>{formatTime(time, item.tz)}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 100,
  },
  header: {
    marginBottom: 30,
    marginTop: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.7,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardLeft: {
    flex: 1,
  },
  cardRight: {
    alignItems: 'flex-end',
  },
  city: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 4,
  },
  date: {
    fontSize: 14,
    color: '#888',
  },
  time: {
    fontSize: 24,
    fontWeight: '300',
    fontVariant: ['tabular-nums'],
  },
});
