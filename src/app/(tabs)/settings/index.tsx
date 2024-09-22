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

  const generalSegm = [
    {
      leadIcon: "home",
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

  const aboutUsSegm = [
    {
      leadIcon: "home",
      title: "Privacy Policy",
      redirect: "",
    },
    {
      leadIcon: "",
      title: "About Developer",
      redirect: "",
    },
  ];

  const moreSegm = [
    {
      leadIcon: "",
      title: "Rate my App",
      redirect: "",
    },
    {
      leadIcon: "",
      title: "Report a Problem ",
      redirect: "",
    },
    {
      leadIcon: "",
      title: "Suggest an Imporvement",
      redirect: "",
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
            data={generalSegm}
            renderItem={({ item }) => (
              <SegmentWithTrail title={item.title} leadIcon={item.leadIcon}>
                {item.trail}
              </SegmentWithTrail>
            )}
          />
        </View>
      </View>
      <View>
        <Typography>{t("About App")}</Typography>
        <View
          style={{ borderWidth: 0.8, borderColor: "gray", borderRadius: 15 }}
        >
          <FlatList
            data={aboutUsSegm}
            renderItem={({ item }) => (
              <SegmentAsPressable
                title={item.title}
                leadIcon={item.leadIcon}
                onPress={item.redirect}
              />
            )}
          />
        </View>
      </View>
      <View>
        <Typography>{t("More")}</Typography>
        <View
          style={{ borderWidth: 0.8, borderColor: "gray", borderRadius: 15 }}
        >
          <FlatList
            data={moreSegm}
            renderItem={({ item }) => (
              <SegmentAsPressable
                title={item.title}
                leadIcon={item.leadIcon}
                onPress={item.redirect}
              />
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
}

interface SettingsSegmentProps {
  title: string;
  leadIcon: any;
  children?: React.ReactNode;
}

function SegmentWithTrail({ title, leadIcon, children }: SettingsSegmentProps) {
  const { t } = useTranslation("settings");

  return (
    <View style={{ padding: 10, display: "flex", flexDirection: "row" }}>
      <MaterialIcons name={leadIcon} color={"black"} />
      <Typography style={{ flex: 1 }}>{t(title)}</Typography>
      {children}
    </View>
  );
}

function SegmentAsPressable({
  title,
  leadIcon = "disabled-by-default",
  onPress,
}: SettingsSegmentProps & { onPress: string }) {
  const { t } = useTranslation("settings");

  return (
    <Pressable style={{ padding: 10, display: "flex", flexDirection: "row" }}>
      <MaterialIcons name={"disabled-by-default"} />
      <Typography style={{ flex: 1 }}>{t(title)}</Typography>
      <MaterialIcons name="chevron-right" />
    </Pressable>
  );
}
