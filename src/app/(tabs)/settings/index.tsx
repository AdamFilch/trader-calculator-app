import { Icon } from "@/src/components/common/CustomUI";
import { Typography } from "@/src/components/common/Typography";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useTranslation } from "react-i18next";
import {
  Button,
  FlatList,
  Pressable,
  SafeAreaView,
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
      leadIcon: "language",
      title: "Change Language",
      trail: <></>,
    },
    {
      leadIcon: "contrast",
      title: "Change Theme",
      trail: <></>,
    },
    {
      leadIcon: "payment",
      title: "Change Currency",
      trail: <></>,
    },
  ];

  const aboutUsSegm = [
    {
      leadIcon: "verified-user",
      title: "Privacy Policy",
      redirect: "",
    },
    {
      leadIcon: "badge",
      title: "About Developer",
      redirect: "",
    },
  ];

  const moreSegm = [
    {
      leadIcon: "star",
      title: "Rate my App",
      redirect: "",
    },
    {
      leadIcon: "flag",
      title: "Report a Problem ",
      redirect: "",
    },
    {
      leadIcon: "build",
      title: "Suggest an Imporvement",
      redirect: "",
    },
  ];
  return (
    <SafeAreaView style={{ padding: 30 }}>
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
    </SafeAreaView>
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
      <Icon icon={leadIcon} />
      <Typography style={{ flex: 1, marginLeft: 10 }}>{t(title)}</Typography>
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
    <Pressable
      style={{ padding: 10, display: "flex", flexDirection: "row" }}
      onPress={() => {
        console.log(title);
      }}
    >
      <Icon icon={leadIcon} />
      <Typography style={{ flex: 1, marginLeft: 10 }}>{t(title)}</Typography>
      <Icon icon={"chevron-right"} />
    </Pressable>
  );
}
