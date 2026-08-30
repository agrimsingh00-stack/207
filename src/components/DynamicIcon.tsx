import React from "react";
import {
  Globe,
  UserCheck,
  Sparkles,
  Bot,
  Calculator,
  Atom,
  Code2,
  BookOpen,
  Cpu,
  Compass,
  Zap,
  Clock,
  MapPin,
  Gauge,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
  Send,
  HelpCircle,
  Lightbulb,
  Award,
  Layers,
  ChevronRight,
  Volume2,
  Copy,
  Check,
  RotateCcw,
  Plus,
  ThumbsUp,
  Heart,
  Share2,
  Calendar,
  Smile,
  BookMarked,
  ShieldCheck,
  LucideProps
} from "lucide-react";

interface DynamicIconProps extends LucideProps {
  name: string;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({ name, ...props }) => {
  switch (name) {
    case "Globe": return <Globe {...props} />;
    case "UserCheck": return <UserCheck {...props} />;
    case "Sparkles": return <Sparkles {...props} />;
    case "Bot": return <Bot {...props} />;
    case "Calculator": return <Calculator {...props} />;
    case "Atom": return <Atom {...props} />;
    case "Code2": return <Code2 {...props} />;
    case "BookOpen": return <BookOpen {...props} />;
    case "Cpu": return <Cpu {...props} />;
    case "Compass": return <Compass {...props} />;
    case "Zap": return <Zap {...props} />;
    case "Clock": return <Clock {...props} />;
    case "MapPin": return <MapPin {...props} />;
    case "Gauge": return <Gauge {...props} />;
    case "HeartHandshake": return <HeartHandshake {...props} />;
    case "CheckCircle2": return <CheckCircle2 {...props} />;
    case "ArrowRight": return <ArrowRight {...props} />;
    case "Send": return <Send {...props} />;
    case "HelpCircle": return <HelpCircle {...props} />;
    case "Lightbulb": return <Lightbulb {...props} />;
    case "Award": return <Award {...props} />;
    case "Layers": return <Layers {...props} />;
    case "ChevronRight": return <ChevronRight {...props} />;
    case "Volume2": return <Volume2 {...props} />;
    case "Copy": return <Copy {...props} />;
    case "Check": return <Check {...props} />;
    case "RotateCcw": return <RotateCcw {...props} />;
    case "Plus": return <Plus {...props} />;
    case "ThumbsUp": return <ThumbsUp {...props} />;
    case "Heart": return <Heart {...props} />;
    case "Share2": return <Share2 {...props} />;
    case "Calendar": return <Calendar {...props} />;
    case "Smile": return <Smile {...props} />;
    case "BookMarked": return <BookMarked {...props} />;
    case "ShieldCheck": return <ShieldCheck {...props} />;
    default: return <Sparkles {...props} />;
  }
};
