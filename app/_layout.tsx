import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack>
        <Stack.Screen 
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="TranslateScreen"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="ScheduleScreen"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="NavigateScreen"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}
