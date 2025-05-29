
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import SignUpPage from './SignUpPage';
import SignInPage from './SignInPage';
import PasswordResetEmail from './PasswordResetEmail';
import PasswordResetOTP from './PasswordResetOTP';
import Dashboard from './Dashboard';
import QuestionPage1 from './QuestionPage1';
import QuestionPage2 from './QuestionPage2';
import QuestionPage3 from './QuestionPage3';
import QuestionPage4 from './QuestionPage4';
import ResetPasswordPage from './ResetPasswordPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/forgot" element={<PasswordResetEmail />} />
        <Route path="/otp" element={<PasswordResetOTP/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/question1" element={<QuestionPage1/>} />
        <Route path="/question2" element={<QuestionPage2/>} />
        <Route path="/question3" element={<QuestionPage3/>} />
        <Route path="/question4" element={<QuestionPage4/>} />
        <Route path="/reset-password" element={<ResetPasswordPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
