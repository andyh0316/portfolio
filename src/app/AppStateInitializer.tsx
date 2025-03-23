"use client";
import { useEffect } from "react";
import { useAppDispatch } from "@/store/hooks";
import { setEnvironment, setThemeType } from "@/store/features/appSlice";
import { Environment } from "@/types";

export function AppStateInitializer() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // dispatch(setEnvironment(process.env.NEXT_PUBLIC_ENVIRONMENT as Environment));
    // dispatch(setThemeType("dark"));
  }, [dispatch]);

  return null;
}
