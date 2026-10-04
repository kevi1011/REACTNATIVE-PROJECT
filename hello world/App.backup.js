import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  TextInput,
  Alert,
  Linking,
  ActivityIndicator,
  SafeAreaView
} from 'react-native';

// --- MOCK COURSE DATA (Lesson 38) ---
const COURSES_DATA = [
  {
    id: '1',
    title: 'Complete React Native Mastery',
    description: 'Learn React Native, Expo CLI, Hooks, State Management & build real-world Android & iOS apps.',
    price: '₹2,499',
    category: 'Mobile Dev',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=600&q=80',
    rating: '4.9 ★ (1.2k)',
  },
  {
    id: '2',
    title: 'Full Stack Web Development',
    description: 'Master HTML, CSS, JavaScript, React, Node.js, Express & MongoDB from scratch.',
    price: '₹3,999',
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80',
    rating: '4.8 ★ (2.5k)',
  },
  {
    id: '3',
    title: 'Python for Beginners & Data Science',
    description: 'Comprehensive Python programming including OOP, Pandas, NumPy, and automation scripts.',
    price: '₹1,999',
    category: 'Programming',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
    rating: '4.9 ★ (890)',
  },
  {
    id: '4',
    title: 'UI/UX Design with Figma',
    description: 'Wireframing, modern mobile UI design systems, interactive prototypes, and typography.',
    price: '₹1,799',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&q=80',
    rating: '4.7 ★ (640)',
  }
];

// --- STUDENTS DATA (Lesson 39 Netflix Horizontal Scroll) ---
const STUDENTS_DATA = [
  {
    id: '1',
    name: 'Aman Sharma',
    course: 'React Native',
    company: 'App Developer @ Startup',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    quote: 'Built my first published mobile app within 3 weeks of taking this course!'
  },
  {
    id: '2',
    name: 'Priya Verma',
    course: 'Full Stack Web',
    company: 'Frontend Engineer',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    quote: 'The project-based learning and clear Hindi explanations made learning so easy.'
  },
  {
    id: '3',
    name: 'Rahul Patel',
    course: 'Python & AI',
    company: 'Data Analyst',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    quote: 'Great curriculum, practical examples, and very responsive community support.'
  },
  {
    id: '4',
    name: 'Sneha Roy',
    course: 'UI/UX Design',
    company: 'Product Designer',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
    quote: 'Loved how Figma components and design tokens were broken down step by step.'
  }
];

export default function App() {
  // Navigation State (Lesson 35 & 36)
  const [currentScreen, setCurrentScreen] = useState('Home');

  // Contact Form State (Lesson 41)
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleContactSubmit = () => {
    if (!userName.trim()) {
      Alert.alert('Validation Error', 'Please enter your Full Name.');
      return;
    }
    if (!userEmail.trim() || !userEmail.includes('@')) {
      Alert.alert('Validation Error', 'Please enter a valid Email Address.');
      return;
    }
    if (!userPhone.trim() || userPhone.length < 10) {
      Alert.alert('Validation Error', 'Please enter a valid 10-digit Phone Number.');
      return;
    }
    if (!userMessage.trim()) {
      Alert.alert('Validation Error', 'Please write a brief message.');
      return;
    }
    if (!agreeTerms) {
      Alert.alert('Validation Error', 'Please agree to terms & conditions before submitting.');
      return;
    }

    Alert.alert(
      'Success! 🎉',
      `Thank you ${userName}! Your message has been sent. We will contact you at ${userEmail} shortly.`,
      [{ text: 'OK', onPress: () => {
        setUserName('');
        setUserEmail('');
        setUserPhone('');
        setUserMessage('');
        setAgreeTerms(false);
      }}]
    );
  };

  const openSocialLink = (url) => {
    Linking.openURL(url).catch((err) =>
      Alert.alert('Error', 'Unable to open link: ' + err.message)
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" backgroundColor="#0b0f19" />

      {/* --- APP HEADER (Lesson 37) --- */}
      <View style={styles.headerContainer}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerLogo}>⚛️</Text>
          <View>
            <Text style={styles.headerTitle}>EduLearn Pro</Text>
            <Text style={styles.headerSubtitle}>React Native Capstone App</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.headerBadge}
          onPress={() => Alert.alert('Course Info', 'Education App in React Native (MindLuster #2863)')}
        >
          <Text style={styles.headerBadgeText}>ML #2863</Text>
        </TouchableOpacity>
      </View>

      {/* --- SCREEN CONTENT --- */}
      <View style={styles.mainContent}>
        {currentScreen === 'Home' && (
          <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
            {/* Hero Card */}
            <View style={styles.heroCard}>
              <Text style={styles.heroPretitle}>WELCOME TO MODERN LEARNING</Text>
              <Text style={styles.heroTitle}>Level Up Your Coding Career in Hindi</Text>
              <Text style={styles.heroDescription}>
                Master Mobile and Web Development with practical projects, real-world source codes, and mentorship.
              </Text>
              <View style={styles.heroActionsRow}>
                <TouchableOpacity
                  style={styles.btnPrimary}
                  onPress={() => setCurrentScreen('Course')}
                >
                  <Text style={styles.btnPrimaryText}>Explore Courses →</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btnSecondary}
                  onPress={() => setCurrentScreen('Contact')}
                >
                  <Text style={styles.btnSecondaryText}>Contact Us</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Featured Section */}
            <View style={styles.sectionTitleRow}>
              <Text style={styles.sectionHeading}>🌟 Top Featured Courses</Text>
              <TouchableOpacity onPress={() => setCurrentScreen('Course')}>
                <Text style={styles.sectionLink}>View All</Text>
              </TouchableOpacity>
            </View>

            {COURSES_DATA.slice(0, 2).map((item) => (
              <View key={item.id} style={styles.courseCardCompact}>
                <Image source={{ uri: item.image }} style={styles.courseImageCompact} />
                <View style={styles.courseInfoCompact}>
                  <Text style={styles.courseTag}>{item.category}</Text>
                  <Text style={styles.courseTitleCompact}>{item.title}</Text>
                  <View style={styles.coursePriceRowCompact}>
                    <Text style={styles.coursePrice}>{item.price}</Text>
                    <TouchableOpacity
                      style={styles.btnEnrollSmall}
                      onPress={() => Alert.alert('Enrollment', `Ready to enroll in ${item.title}?`)}
                    >
                      <Text style={styles.btnEnrollSmallText}>Enroll</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}

            {/* Testimonials Banner */}
            <View style={styles.bannerBox}>
              <Text style={styles.bannerTitle}>🎓 5,000+ Students Certified</Text>
              <Text style={styles.bannerText}>
                Check out our student success stories and horizontal reviews card section!
              </Text>
              <TouchableOpacity
                style={styles.bannerBtn}
                onPress={() => setCurrentScreen('Students')}
              >
                <Text style={styles.bannerBtnText}>View Student Reviews →</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        )}

        {/* --- SCREEN 2: COURSE CATALOG (Lesson 38) --- */}
        {currentScreen === 'Course' && (
          <FlatList
            data={COURSES_DATA}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <View style={{ marginBottom: 16 }}>
                <Text style={styles.screenMainHeading}>All Available Courses</Text>
                <Text style={styles.screenMainSub}>High quality video lectures with free source code</Text>
              </View>
            }
            renderItem={({ item }) => (
              <View style={styles.fullCourseCard}>
                <Image source={{ uri: item.image }} style={styles.fullCourseImage} />
                <View style={styles.fullCourseBody}>
                  <View style={styles.fullCourseMetaRow}>
                    <Text style={styles.courseTag}>{item.category}</Text>
                    <Text style={styles.courseRating}>{item.rating}</Text>
                  </View>
                  <Text style={styles.fullCourseTitle}>{item.title}</Text>
                  <Text style={styles.fullCourseDesc}>{item.description}</Text>
                  <View style={styles.fullCourseFooter}>
                    <Text style={styles.fullCoursePrice}>{item.price}</Text>
                    <TouchableOpacity
                      style={styles.btnPrimary}
                      onPress={() => Alert.alert('Join Course', `You clicked Join for ${item.title}. Welcome aboard!`)}
                    >
                      <Text style={styles.btnPrimaryText}>Join Course</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          />
        )}

        {/* --- SCREEN 3: USER DATA / STUDENTS (Lesson 39 Netflix Scroll) --- */}
        {currentScreen === 'Students' && (
          <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
            <Text style={styles.screenMainHeading}>Our Students & Alumni</Text>
            <Text style={styles.screenMainSub}>Swipe horizontally to view student success reviews</Text>

            {/* Netflix Horizontal Carousel */}
            <View style={{ marginVertical: 14 }}>
              <FlatList
                data={STUDENTS_DATA}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <View style={styles.studentCardHorizontal}>
                    <Image source={{ uri: item.avatar }} style={styles.studentAvatar} />
                    <Text style={styles.studentName}>{item.name}</Text>
                    <Text style={styles.studentRole}>{item.company}</Text>
                    <View style={styles.studentBadge}>
                      <Text style={styles.studentBadgeText}>{item.course}</Text>
                    </View>
                    <Text style={styles.studentQuote}>"{item.quote}"</Text>
                  </View>
                )}
              />
            </View>

            <View style={styles.statsPanel}>
              <Text style={styles.statsPanelTitle}>Placement & Community Highlights</Text>
              <View style={styles.statsNumbersRow}>
                <View style={styles.statsCol}>
                  <Text style={styles.statsBigNum}>94%</Text>
                  <Text style={styles.statsCaption}>Course Completion Rate</Text>
                </View>
                <View style={styles.statsCol}>
                  <Text style={styles.statsBigNum}>4.9/5</Text>
                  <Text style={styles.statsCaption}>Average Rating</Text>
                </View>
                <View style={styles.statsCol}>
                  <Text style={styles.statsBigNum}>150+</Text>
                  <Text style={styles.statsCaption}>Hiring Partners</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        )}

        {/* --- SCREEN 4: ABOUT ME (Lesson 40) --- */}
        {currentScreen === 'About' && (
          <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
            <View style={styles.aboutProfileCard}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80' }}
                style={styles.aboutAvatar}
              />
              <Text style={styles.aboutName}>Vinod Thapa</Text>
              <Text style={styles.aboutTitle}>Lead Instructor & Senior React Developer</Text>
              <Text style={styles.aboutBio}>
                Passionate about teaching modern web and mobile application development in Hindi. Empowering 100,000+ students to land tech careers through hands-on, project-driven tutorials.
              </Text>

              {/* Skills Chips */}
              <View style={styles.skillsChipsRow}>
                {['React Native', 'React.js', 'Node.js', 'Expo CLI', 'JavaScript ES6', 'REST APIs', 'MongoDB'].map((skill, index) => (
                  <View key={index} style={styles.skillChip}>
                    <Text style={styles.skillChipText}>{skill}</Text>
                  </View>
                ))}
              </View>

              {/* Working Social Network Links (Lesson 40 Linking API) */}
              <Text style={styles.socialHeader}>Connect With Me</Text>
              <View style={styles.socialButtonsRow}>
                <TouchableOpacity
                  style={[styles.socialBtn, { backgroundColor: '#FF0000' }]}
                  onPress={() => openSocialLink('https://youtube.com')}
                >
                  <Text style={styles.socialBtnText}>YouTube</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.socialBtn, { backgroundColor: '#E1306C' }]}
                  onPress={() => openSocialLink('https://instagram.com')}
                >
                  <Text style={styles.socialBtnText}>Instagram</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.socialBtn, { backgroundColor: '#24292E' }]}
                  onPress={() => openSocialLink('https://github.com')}
                >
                  <Text style={styles.socialBtnText}>GitHub</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        )}

        {/* --- SCREEN 5: CONTACT US (Lesson 41 Form Validation) --- */}
        {currentScreen === 'Contact' && (
          <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
            <Text style={styles.screenMainHeading}>Get In Touch</Text>
            <Text style={styles.screenMainSub}>Have questions regarding courses or certificate? Send us a message.</Text>

            <View style={styles.formContainer}>
              <Text style={styles.inputLabel}>Full Name *</Text>
              <TextInput
                style={styles.inputField}
                placeholder="e.g. Kevin Roy"
                placeholderTextColor="#6b7280"
                value={userName}
                onChangeText={setUserName}
              />

              <Text style={styles.inputLabel}>Email Address *</Text>
              <TextInput
                style={styles.inputField}
                placeholder="e.g. kevin@example.com"
                placeholderTextColor="#6b7280"
                keyboardType="email-address"
                autoCapitalize="none"
                value={userEmail}
                onChangeText={setUserEmail}
              />

              <Text style={styles.inputLabel}>Mobile Phone *</Text>
              <TextInput
                style={styles.inputField}
                placeholder="e.g. 9876543210"
                placeholderTextColor="#6b7280"
                keyboardType="phone-pad"
                value={userPhone}
                onChangeText={setUserPhone}
              />

              <Text style={styles.inputLabel}>Your Message *</Text>
              <TextInput
                style={[styles.inputField, { height: 100, textAlignVertical: 'top' }]}
                placeholder="What would you like to know about our courses?"
                placeholderTextColor="#6b7280"
                multiline
                value={userMessage}
                onChangeText={setUserMessage}
              />

              {/* Agreement Checkbox */}
              <TouchableOpacity
                style={styles.checkboxRow}
                onPress={() => setAgreeTerms(!agreeTerms)}
              >
                <View style={[styles.checkboxBox, agreeTerms && styles.checkboxBoxChecked]}>
                  {agreeTerms && <Text style={styles.checkmark}>✓</Text>}
                </View>
                <Text style={styles.checkboxLabel}>
                  I agree to the Terms of Service & Privacy Policy
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.btnPrimary, { marginTop: 16 }]}
                onPress={handleContactSubmit}
              >
                <Text style={styles.btnPrimaryText}>Submit Message ✉️</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        )}
      </View>

      {/* --- BOTTOM MENU BAR (Lesson 36) --- */}
      <View style={styles.bottomMenuBar}>
        {[
          { key: 'Home', icon: '🏠', label: 'Home' },
          { key: 'Course', icon: '📚', label: 'Courses' },
          { key: 'Students', icon: '👥', label: 'Students' },
          { key: 'About', icon: '👤', label: 'About' },
          { key: 'Contact', icon: '✉️', label: 'Contact' },
        ].map((tab) => {
          const isActive = currentScreen === tab.key;
          return (
            <TouchableOpacity
              key={tab.key}
              style={[styles.menuTabBtn, isActive && styles.menuTabBtnActive]}
              onPress={() => setCurrentScreen(tab.key)}
            >
              <Text style={styles.menuTabIcon}>{tab.icon}</Text>
              <Text style={[styles.menuTabLabel, isActive && styles.menuTabLabelActive]}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

// --- STYLESHEET (Lessons 17, 18, 19, 21 Flexbox) ---
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0b0f19',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 14,
    backgroundColor: '#111827',
    borderBottomWidth: 1,
    borderBottomColor: '#1f2937',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  headerLogo: {
    fontSize: 26,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#ffffff',
  },
  headerSubtitle: {
    fontSize: 11,
    color: '#9ca3af',
  },
  headerBadge: {
    backgroundColor: 'rgba(99, 102, 241, 0.15)',
    borderColor: '#6366f1',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 14,
  },
  headerBadgeText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#818cf8',
  },
  mainContent: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 24,
  },
  heroCard: {
    backgroundColor: '#111827',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  heroPretitle: {
    fontSize: 11,
    color: '#6366f1',
    fontWeight: '700',
    letterSpacing: 1,
    marginBottom: 6,
  },
  heroTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#ffffff',
    lineHeight: 28,
    marginBottom: 10,
  },
  heroDescription: {
    fontSize: 13,
    color: '#9ca3af',
    lineHeight: 19,
    marginBottom: 18,
  },
  heroActionsRow: {
    flexDirection: 'row',
    gap: 12,
  },
  btnPrimary: {
    backgroundColor: '#6366f1',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnPrimaryText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 14,
  },
  btnSecondary: {
    backgroundColor: '#1f2937',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#374151',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnSecondaryText: {
    color: '#e5e7eb',
    fontWeight: '600',
    fontSize: 14,
  },
  sectionTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionHeading: {
    fontSize: 16,
    fontWeight: '700',
    color: '#f3f4f6',
  },
  sectionLink: {
    fontSize: 13,
    color: '#6366f1',
    fontWeight: '600',
  },
  courseCardCompact: {
    flexDirection: 'row',
    backgroundColor: '#111827',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#1f2937',
  },
  courseImageCompact: {
    width: 100,
    height: 90,
  },
  courseInfoCompact: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  courseTag: {
    fontSize: 10,
    fontWeight: '700',
    color: '#34d399',
    textTransform: 'uppercase',
  },
  courseTitleCompact: {
    fontSize: 13,
    fontWeight: '700',
    color: '#ffffff',
  },
  coursePriceRowCompact: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  coursePrice: {
    fontSize: 14,
    fontWeight: '800',
    color: '#f59e0b',
  },
  btnEnrollSmall: {
    backgroundColor: '#6366f1',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 6,
  },
  btnEnrollSmallText: {
    fontSize: 11,
    color: '#ffffff',
    fontWeight: '700',
  },
  bannerBox: {
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
    borderColor: '#6366f1',
    borderWidth: 1,
    borderRadius: 14,
    padding: 18,
    marginTop: 10,
  },
  bannerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 6,
  },
  bannerText: {
    fontSize: 12,
    color: '#9ca3af',
    lineHeight: 18,
    marginBottom: 12,
  },
  bannerBtn: {
    alignSelf: 'flex-start',
  },
  bannerBtnText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#818cf8',
  },
  screenMainHeading: {
    fontSize: 22,
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: 4,
  },
  screenMainSub: {
    fontSize: 13,
    color: '#9ca3af',
    marginBottom: 16,
  },
  fullCourseCard: {
    backgroundColor: '#111827',
    borderRadius: 14,
    overflow: 'hidden',
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#1f2937',
  },
  fullCourseImage: {
    width: '100%',
    height: 160,
  },
  fullCourseBody: {
    padding: 16,
  },
  fullCourseMetaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  courseRating: {
    fontSize: 12,
    color: '#fbbf24',
    fontWeight: '600',
  },
  fullCourseTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 8,
  },
  fullCourseDesc: {
    fontSize: 13,
    color: '#9ca3af',
    lineHeight: 19,
    marginBottom: 16,
  },
  fullCourseFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#1f2937',
    paddingTop: 12,
  },
  fullCoursePrice: {
    fontSize: 18,
    fontWeight: '800',
    color: '#10b981',
  },
  studentCardHorizontal: {
    width: 240,
    backgroundColor: '#111827',
    borderRadius: 14,
    padding: 16,
    marginRight: 14,
    borderWidth: 1,
    borderColor: '#1f2937',
    alignItems: 'center',
  },
  studentAvatar: {
    width: 68,
    height: 68,
    borderRadius: 34,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#6366f1',
  },
  studentName: {
    fontSize: 15,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 2,
  },
  studentRole: {
    fontSize: 11,
    color: '#9ca3af',
    marginBottom: 8,
  },
  studentBadge: {
    backgroundColor: 'rgba(6, 182, 212, 0.15)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
    marginBottom: 10,
  },
  studentBadgeText: {
    fontSize: 10,
    color: '#06b6d4',
    fontWeight: '600',
  },
  studentQuote: {
    fontSize: 12,
    color: '#d1d5db',
    textAlign: 'center',
    fontStyle: 'italic',
    lineHeight: 17,
  },
  statsPanel: {
    backgroundColor: '#111827',
    borderRadius: 14,
    padding: 18,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#1f2937',
  },
  statsPanelTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 14,
  },
  statsNumbersRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statsCol: {
    alignItems: 'center',
  },
  statsBigNum: {
    fontSize: 20,
    fontWeight: '800',
    color: '#6366f1',
  },
  statsCaption: {
    fontSize: 10,
    color: '#9ca3af',
    marginTop: 2,
  },
  aboutProfileCard: {
    backgroundColor: '#111827',
    borderRadius: 16,
    padding: 22,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1f2937',
  },
  aboutAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#6366f1',
    marginBottom: 14,
  },
  aboutName: {
    fontSize: 20,
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: 4,
  },
  aboutTitle: {
    fontSize: 12,
    color: '#818cf8',
    fontWeight: '600',
    marginBottom: 14,
  },
  aboutBio: {
    fontSize: 13,
    color: '#9ca3af',
    lineHeight: 20,
    textAlign: 'center',
    marginBottom: 18,
  },
  skillsChipsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 22,
  },
  skillChip: {
    backgroundColor: '#1f2937',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#374151',
  },
  skillChipText: {
    fontSize: 11,
    color: '#d1d5db',
    fontWeight: '500',
  },
  socialHeader: {
    fontSize: 14,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 12,
  },
  socialButtonsRow: {
    flexDirection: 'row',
    gap: 12,
  },
  socialBtn: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  socialBtnText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 12,
  },
  formContainer: {
    backgroundColor: '#111827',
    borderRadius: 14,
    padding: 18,
    borderWidth: 1,
    borderColor: '#1f2937',
  },
  inputLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#d1d5db',
    marginBottom: 6,
    marginTop: 10,
  },
  inputField: {
    backgroundColor: '#1f2937',
    borderWidth: 1,
    borderColor: '#374151',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    color: '#ffffff',
    fontSize: 14,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    gap: 10,
  },
  checkboxBox: {
    width: 20,
    height: 20,
    borderWidth: 1.5,
    borderColor: '#6b7280',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxBoxChecked: {
    backgroundColor: '#6366f1',
    borderColor: '#6366f1',
  },
  checkmark: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  checkboxLabel: {
    fontSize: 12,
    color: '#9ca3af',
    flex: 1,
  },
  bottomMenuBar: {
    flexDirection: 'row',
    backgroundColor: '#111827',
    borderTopWidth: 1,
    borderTopColor: '#1f2937',
    paddingVertical: 8,
    paddingHorizontal: 6,
  },
  menuTabBtn: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 6,
    borderRadius: 8,
  },
  menuTabBtnActive: {
    backgroundColor: 'rgba(99, 102, 241, 0.12)',
  },
  menuTabIcon: {
    fontSize: 18,
    marginBottom: 3,
  },
  menuTabLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: '#9ca3af',
  },
  menuTabLabelActive: {
    color: '#818cf8',
    fontWeight: '700',
  },
});
