import { Icon } from "@/src/components/common/custom-ui";
import { Typography } from "@/src/components/common/Typography";
import { useTheme } from "@/src/constants/TraderThemeContext";
import { useTranslation } from "react-i18next";
import { FlatList, Platform, Pressable, Switch, View } from "react-native";
import { useState } from "react";
import {
  availableCurrency,
  availableLanguages,
} from "@/src/constants/Settings";
import {
  Box,
  Button,
  Card,
  Heading,
  Menu,
  MenuItem,
  MenuItemLabel,
  Text,
} from "@gluestack-ui/themed";

export default function SettingsPage() {
  const { t, i18n } = useTranslation("settings");
  const { isLightMode, toggleTheme } = useTheme();
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  // const [selectedCurrency, setSelectedCurrency] = useState("rupiah");

  console.log("selectedLang", i18n.language);
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
        <Menu
          placement="right"
          offset={5}
          disabledKeys={["Settings"]}
          trigger={({ ...triggerProps }) => {
            return (
              <Button variant="outline" size="sm" {...triggerProps}>
                <Text>
                  {
                    availableLanguages.find((lang) => lang.id == i18n.language)
                      ?.name
                  }
                </Text>
              </Button>
            );
          }}
        >
          {availableLanguages.map((lang, index) => {
            return (
              <MenuItem
                textValue={lang.id}
                key={lang.id}
                onPress={() => {
                  setSelectedLanguage(lang.id);
                  i18n.changeLanguage(lang.id);
                }}
              >
                <MenuItemLabel>{lang.name}</MenuItemLabel>
              </MenuItem>
            );
          })}
        </Menu>
      ),
    },

    {
      leadIcon: "payment",
      title: "Change Currency",
      trail: (
        <Menu
          placement="right"
          offset={5}
          disabledKeys={["Settings"]}
          trigger={({ ...triggerProps }) => {
            return (
              <Button variant="outline" size="sm" {...triggerProps}>
                <Text>
                  {
                    availableLanguages.find((lang) => lang.id == i18n.language)
                      ?.name
                  }
                </Text>
              </Button>
            );
          }}
        >
          {availableLanguages.map((lang, index) => {
            return (
              <MenuItem
                textValue={lang.id}
                key={lang.id}
                onPress={() => {
                  setSelectedLanguage(lang.id);
                  i18n.changeLanguage(lang.id);
                }}
              >
                <MenuItemLabel>{lang.name}</MenuItemLabel>
              </MenuItem>
            );
          })}
        </Menu>
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
      <Card>
        <Heading>Diary Specific</Heading>
        {/* <FlatList> */}
        <Text>
          This should be within a different page, see like twitter or settings
          page with deeper screen
        </Text>
        <Text>Currency Change</Text>
        <Text>Market Change</Text>
        <Text>Diary Name Change?</Text>
        <Text>Diary Description?</Text>
      </Card>
      <View style={{ marginTop: 20 }}>
        <Heading size="sm">{t("General")}</Heading>

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
        <Heading size="sm">{t("About App")}</Heading>

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
        <Heading size="sm">{t("More")}</Heading>

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
