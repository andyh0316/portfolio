"use client";
import { useEffect } from "react";
import { useAppDispatch } from "@/store/hooks";
import { Environment, setEnvironment } from "@/store/features/appSlice";

export function AppStateInitializer() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setEnvironment(process.env.NEXT_PUBLIC_ENVIRONMENT as Environment));
  }, [dispatch]);

  return null;
}
