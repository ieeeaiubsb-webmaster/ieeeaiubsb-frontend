'use client'
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export default function LoadingBar() {
  return (
    <>
      <ProgressBar
        height="4px"
        color="#06b6d4"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
}