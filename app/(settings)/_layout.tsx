import { Stack } from "expo-router";

export default function SettingLayout() {
  return (
    <Stack>
      <Stack.Screen name="edit-profile" options={{ headerShown: false }} />
      <Stack.Screen name="edit-username" options={{ headerShown: false }} />
      <Stack.Screen name="edit-password" options={{ headerShown: false }} />
    </Stack>
  );
}
