import { Icon } from "@/src/components/common/CustomUI";
import { Typography } from "@/src/components/common/Typography";
import { useTheme } from "@/src/constants/TraderThemeContext";
import { useTranslation } from "react-i18next";
import { FlatList, Platform, Pressable, Switch, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import {
  availableCurrency,
  availableLanguages,
} from "@/src/constants/Settings";

export default function SettingsPage() {
  const { t, i18n } = useTranslation("settings");
  const { isLightMode, toggleTheme } = useTheme();
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [selectedCurrency, setSelectedCurrency] = useState("rupiah");

  const generalSegm = [
    {
      leadIcon: "contrast",
      title: "Change Theme",
      trail: (
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isLightMode ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={() => {
            toggleTheme();
          }}
          value={!isLightMode}
        />
      ),
    },
    {
      leadIcon: "language",
      title: "Change Language",
      trail: (
        <View
          style={{
            borderWidth: 1,
            borderColor: "grey",
            borderRadius: 4,
          }}
        >
          <Picker
            style={{
              width: 100,
              textAlign: "right",
            }}
            mode="dropdown"
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) => {
              setSelectedLanguage(itemValue);
              i18n.changeLanguage(itemValue);
            }}
          >
            {Object.values(availableLanguages).map((language) => {
              return (
                <Picker.Item
                  key={language.id}
                  label={language.name}
                  value={language.id}
                />
              );
            })}
          </Picker>
        </View>
      ),
    },

    {
      leadIcon: "payment",
      title: "Change Currency",
      trail: (
        <View
          style={{
            borderWidth: 1,
            borderColor: "grey",
            borderRadius: 4,
          }}
        >
          <Picker
            style={{
              width: 100,
              textAlign: "right",
            }}
            mode="dropdown"
            selectedValue={selectedCurrency}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedCurrency(itemValue)
            }
          >
            {Object.entries(availableCurrency).map(([key, currency]) => {
              return (
                <Picker.Item key={key} label={currency.name} value={key} />
              );
            })}
          </Picker>
        </View>
      ),
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
    <View style={{ padding: 20 }}>
      <View>
        <Typography style={{ fontSize: 30 }}>{t("Settings")}</Typography>
      </View>
      <View style={{ marginTop: 20 }}>
        <Typography>{t("General")}</Typography>
        <View
          style={{
            borderWidth: 0.8,
            borderColor: "gray",
            borderRadius: 15,
            padding: 10,
          }}
        >
          <FlatList
            data={generalSegm}
            scrollEnabled={false}
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
          style={{
            borderWidth: 0.8,
            borderColor: "gray",
            borderRadius: 15,
            padding: 10,
          }}
        >
          <FlatList
            scrollEnabled={false}
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
          style={{
            borderWidth: 0.8,
            borderColor: "gray",
            borderRadius: 15,
            padding: 10,
          }}
        >
          <FlatList
            scrollEnabled={false}
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
    </View>
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
    <View
      style={{
        paddingHorizontal: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: Platform.OS ? 5 : 0,
      }}
    >
      <Icon icon={leadIcon} />
      <Typography style={{ flex: 1, marginLeft: 15 }}>{t(title)}</Typography>
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
      style={{
        paddingHorizontal: 10,
        paddingVertical: 15,
        display: "flex",
        flexDirection: "row",
      }}
      onPress={() => {
        console.log(title);
      }}
    >
      <Icon icon={leadIcon} />
      <Typography style={{ flex: 1, marginLeft: 15 }}>{t(title)}</Typography>
      <Icon icon={"chevron-right"} />
    </Pressable>
  );
}
