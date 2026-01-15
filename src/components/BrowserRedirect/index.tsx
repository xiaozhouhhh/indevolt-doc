import React, { useEffect } from "react";
import { useLocation, useHistory } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import BrowserOnly from "@docusaurus/BrowserOnly";

const normalizeLang = (lang: string): string => lang.toLowerCase();

const BrowserRedirect = (): JSX.Element | null => {
  return <BrowserOnly>{() => <RedirectLogic />}</BrowserOnly>;
};

const RedirectLogic = () => {
  const { i18n } = useDocusaurusContext();
  const { pathname } = useLocation();
  const history = useHistory();

  useEffect(() => {
    // 1. Only redirect if at the absolute root '/'
    if (pathname !== "/") return;

    // 2. Detect browser language (zh-CN -> zh)
    const browserLang = navigator.language.split("-")[0].toLowerCase();

    // 3. Check if we should redirect
    const isSupported = i18n.locales.includes(browserLang);
    const isNotDefault = browserLang !== i18n.defaultLocale;

    // Check if the user has manually chosen a language before (optional)
    const hasManualChoice = localStorage.getItem("docusaurus.i18n.prevLocale");

    if (isSupported && isNotDefault && !hasManualChoice) {
      // IMPORTANT: Use window.location.href to switch between localized apps.
      // Do NOT use history.push/replace here.
      window.location.href = `/${browserLang}/`;
    }
  }, [pathname, i18n]);
  return null;
};

export default BrowserRedirect;
