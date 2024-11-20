import { Stack } from 'expo-router/stack';
import { AuthProvider } from '../store/AuthContext';

export default function Layout() {
  return (
    <AuthProvider>
      <Stack />
    </AuthProvider>
  );
}
