"use client";

import { useFontStore } from "@/lib/store";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AlignLeft, AlignCenter, AlignRight, Bold, Italic, Underline } from "lucide-react";
import { useState } from "react";

export function RichTextToolbar() {
  const { templates, selectedTemplate, setSelectedTemplate } = useFontStore();

  // local state cho nội dung hiển thị
  const [text, setText] = useState("HELLO FONT");
  const [fontSize, setFontSize] = useState(80);
  const [isBold, setBold] = useState(false);
  const [isItalic, setItalic] = useState(false);
  const [isUnderline, setUnderline] = useState(false);
  const [align, setAlign] = useState<"left" | "center" | "right">("center");

  // cập nhật store
  const handleFontChange = (fontId: string) => {
    const template = templates.find((t) => t.id === fontId);
    if (template) setSelectedTemplate(template);
  };

  // đồng bộ với localStorage để FontPreview có thể đọc
  if (typeof window !== "undefined") {
    localStorage.setItem(
      "font-settings",
      JSON.stringify({ text, fontSize, isBold, isItalic, isUnderline, align })
    );
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 p-3 bg-background/60 backdrop-blur-md border rounded-lg w-full max-w-4xl">
      {/* chọn font */}
      <Select value={selectedTemplate?.id || ""} onValueChange={handleFontChange}>
        <SelectTrigger className="w-[160px]">
          <SelectValue placeholder="Chọn font" />
        </SelectTrigger>
        <SelectContent>
          {templates.map((t) => (
            <SelectItem key={t.id} value={t.id}>
              {t.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* nhập nội dung */}
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-[200px] bg-zinc-800 text-white"
        placeholder="Nhập nội dung..."
      />

      {/* kích thước chữ */}
      <Input
        type="number"
        min={20}
        max={200}
        value={fontSize}
        onChange={(e) => setFontSize(Number(e.target.value))}
        className="w-[80px] text-center bg-zinc-800 text-white"
      />

      {/* kiểu chữ */}
      <div className="flex gap-1">
        <Button
          variant={isBold ? "default" : "outline"}
          size="icon"
          onClick={() => setBold(!isBold)}
        >
          <Bold className="w-4 h-4" />
        </Button>
        <Button
          variant={isItalic ? "default" : "outline"}
          size="icon"
          onClick={() => setItalic(!isItalic)}
        >
          <Italic className="w-4 h-4" />
        </Button>
        <Button
          variant={isUnderline ? "default" : "outline"}
          size="icon"
          onClick={() => setUnderline(!isUnderline)}
        >
          <Underline className="w-4 h-4" />
        </Button>
      </div>

      {/* căn lề */}
      <div className="flex gap-1">
        <Button
          variant={align === "left" ? "default" : "outline"}
          size="icon"
          onClick={() => setAlign("left")}
        >
          <AlignLeft className="w-4 h-4" />
        </Button>
        <Button
          variant={align === "center" ? "default" : "outline"}
          size="icon"
          onClick={() => setAlign("center")}
        >
          <AlignCenter className="w-4 h-4" />
        </Button>
        <Button
          variant={align === "right" ? "default" : "outline"}
          size="icon"
          onClick={() => setAlign("right")}
        >
          <AlignRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
