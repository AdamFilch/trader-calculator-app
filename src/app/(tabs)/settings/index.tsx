import { Typography } from "@/src/components/common/Typography";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useTranslation } from "react-i18next";
import {
  Button,
  FlatList,
  Pressable,
  ScrollView,
  SectionList,
  Settings,
  View,
} from "react-native";

export default function SettingsPage() {
  const { t } = useTranslation("settings");
  const availableLanguages = [
    {
      id: "en",
      lang: "English",
    },
    {
      id: "id",
      lang: "Bahasa Indonesia",
    },
    {
      id: "ms",
      lang: "Bahasa Melayu",
    },
  ];

  const segments1 = [
    {
      leadIcon: "",
      title: "Change Language",
      trail: <></>,
    },
    {
      leadIcon: "",
      title: "Change Theme",
      trail: <></>,
    },
    {
      leadIcon: "",
      title: "Change Currency",
      trail: <></>,
    },
  ];
  return (
    <ScrollView style={{ padding: 30 }}>
      <View>
        <Typography style={{ fontSize: 30 }}>{t("Settings")}</Typography>
      </View>
      <View style={{ marginTop: 20 }}>
        <Typography>{t("General")}</Typography>
        <View
          style={{ borderWidth: 0.8, borderColor: "gray", borderRadius: 15 }}
        >
          <FlatList
            data={segments1}
            renderItem={({ item }) => (
              <SettingSegment title={item.title} leadIcon={item.leadIcon}>
                {item.trail}
              </SettingSegment>
            )}
          />
        </View>
      </View>
      <View>
        <Typography>{t("About App")}</Typography>
        <View
          style={{ borderWidth: 0.8, borderColor: "gray", borderRadius: 15 }}
        >
          <View style={{ padding: 10 }}>
            <Typography>{t("Privacy Policy")}</Typography>
          </View>
          <View style={{ padding: 10 }}>
            <Typography>{t("About Developer")}</Typography>
          </View>
          <View style={{ padding: 10 }}>
            <Typography>{t("More")}</Typography>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

interface SettingsSegmentProps {
  title: string;
  leadIcon: string;
  children: React.ReactNode;
}

function SettingSegment({ title, leadIcon, children }: SettingsSegmentProps) {
  const { t } = useTranslation("settings");

  return (
    <View style={{ padding: 10 }}>
      <MaterialIcons />
      <Typography>{t(title)}</Typography>
      {children}
    </View>
  );
}
