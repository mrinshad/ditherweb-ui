"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";

export function HeroDemo() {
  const [stationName, setStationName] = useState("CYBER-TERMINAL-95");
  const [enableDither, setEnableDither] = useState(true);
  const [enableScanlines, setEnableScanlines] = useState(false);
  const [baudRate, setBaudRate] = useState("56K");
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 4000);
  };

  return (
    <Card className="w-full max-w-lg shadow-lg relative overflow-hidden bg-surface">
      {/* Retro Titlebar */}
      <div className="flex items-center justify-between border-b border-border bg-primary px-3 py-1.5 text-primary-foreground font-mono text-xs select-none">
        <div className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 bg-secondary border border-border" />
          <span className="font-bold tracking-wider">DIALUP_CONFIG.EXE</span>
        </div>
        <div className="flex items-center gap-1">
          <button
            type="button"
            aria-label="Minimize"
            className="bevel-raised active:bevel-pressed h-4 w-4 text-[10px] flex items-center justify-center bg-surface text-foreground font-bold leading-none"
          >
            _
          </button>
          <button
            type="button"
            aria-label="Maximize"
            className="bevel-raised active:bevel-pressed h-4 w-4 text-[10px] flex items-center justify-center bg-surface text-foreground font-bold leading-none"
          >
            □
          </button>
          <button
            type="button"
            aria-label="Close"
            className="bevel-raised active:bevel-pressed h-4 w-4 text-[10px] flex items-center justify-center bg-surface text-foreground font-bold leading-none"
          >
            ✕
          </button>
        </div>
      </div>

      <CardHeader className="pb-3 pt-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-mono uppercase tracking-wide">
            Workstation Setup
          </CardTitle>
          <div className="flex items-center gap-1.5">
            <Badge variant="success">ONLINE</Badge>
            <Badge variant="outline">{baudRate}</Badge>
          </div>
        </div>
        <CardDescription className="font-mono text-xs">
          Interactive showcase composing 7 Ditherweb core components.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <form onSubmit={handleSave} className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="hero-station-name" className="text-xs font-mono">
              Terminal Identifier
            </Label>
            <Input
              id="hero-station-name"
              value={stationName}
              onChange={(e) => setStationName(e.target.value)}
              placeholder="e.g. NODE-01"
              className="font-mono text-xs"
            />
          </div>

          <div className="bevel-inset bg-muted/40 p-3 space-y-3">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label
                  htmlFor="hero-dither-switch"
                  className="text-xs font-mono font-medium cursor-pointer"
                >
                  Bayer Dither Pattern
                </Label>
                <p className="text-[11px] font-mono text-muted-foreground">
                  Apply ordered 4x4 matrix texture
                </p>
              </div>
              <Switch
                id="hero-dither-switch"
                checked={enableDither}
                onChange={(e) => setEnableDither(e.target.checked)}
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label
                  htmlFor="hero-scanlines-switch"
                  className="text-xs font-mono font-medium cursor-pointer"
                >
                  CRT Phosphor Grid
                </Label>
                <p className="text-[11px] font-mono text-muted-foreground">
                  Simulate shadow mask scanline optics
                </p>
              </div>
              <Switch
                id="hero-scanlines-switch"
                checked={enableScanlines}
                onChange={(e) => setEnableScanlines(e.target.checked)}
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-1">
            <Checkbox id="hero-chk-sound" defaultChecked>
              Synthesizer Audio (FM)
            </Checkbox>
            <Checkbox id="hero-chk-accel" defaultChecked>
              Hardware Accelerated
            </Checkbox>
          </div>

          {isSaved && (
            <Alert variant="success" className="py-2">
              <AlertTitle className="text-xs font-mono">
                Configuration Dispatched
              </AlertTitle>
              <AlertDescription className="text-xs font-mono">
                Workstation profile for {stationName} synced via modern React state.
              </AlertDescription>
            </Alert>
          )}

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-1 font-mono text-xs">
              <span className="text-muted-foreground">Speed:</span>
              <button
                type="button"
                onClick={() => setBaudRate("28.8K")}
                className={`px-1.5 py-0.5 text-[10px] ${baudRate === "28.8K" ? "bevel-inset font-bold text-primary" : "bevel-raised"}`}
              >
                28.8K
              </button>
              <button
                type="button"
                onClick={() => setBaudRate("56K")}
                className={`px-1.5 py-0.5 text-[10px] ${baudRate === "56K" ? "bevel-inset font-bold text-primary" : "bevel-raised"}`}
              >
                56K
              </button>
              <button
                type="button"
                onClick={() => setBaudRate("ISDN")}
                className={`px-1.5 py-0.5 text-[10px] ${baudRate === "ISDN" ? "bevel-inset font-bold text-primary" : "bevel-raised"}`}
              >
                ISDN
              </button>
            </div>

            <div className="flex items-center gap-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => {
                  setStationName("CYBER-TERMINAL-95");
                  setEnableDither(true);
                  setEnableScanlines(false);
                  setBaudRate("56K");
                }}
              >
                Reset
              </Button>
              <Button type="submit" variant="primary" size="sm">
                Apply Settings
              </Button>
            </div>
          </div>
        </form>
      </CardContent>

      <CardFooter className="border-t border-border bg-muted/20 py-2.5 font-mono text-[11px] text-muted-foreground flex justify-between">
        <span>STATUS: READY</span>
        <span>LATENCY: 42ms</span>
      </CardFooter>
    </Card>
  );
}
