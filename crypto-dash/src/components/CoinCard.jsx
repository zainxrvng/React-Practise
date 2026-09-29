import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const formatPrice = (n) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: n < 1 ? 6 : 2,
  }).format(n);

const formatCap = (n) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    notation: "compact",
    maximumFractionDigits: 2,
  }).format(n);

const CoinCard = ({ coin }) => {
  const change = coin.price_change_percentage_24h ?? 0;
  const isUp = change >= 0;

  return (
    <Card className="group relative overflow-hidden border-white/10 bg-white/[0.04] py-0 text-white backdrop-blur-xl transition-colors hover:border-white/25">
      {/* glow tinted by 24h direction */}
      <div
        className={`pointer-events-none absolute -right-12 -top-12 size-44 rounded-full blur-3xl opacity-20 transition-opacity duration-500 group-hover:opacity-50 ${
          isUp ? "bg-emerald-400" : "bg-rose-500"
        }`}
      />

      <CardContent className="relative space-y-6 p-5">
        <div className="flex items-center gap-3">
          <img
            src={coin.image}
            alt={coin.name}
            className="size-11 rounded-full bg-white/10 p-1.5 ring-1 ring-white/10"
          />
          <div className="min-w-0 flex-1">
            <h2 className="truncate font-semibold leading-tight">
              {coin.name}
            </h2>
            <p className="text-sm text-white/50">{coin.symbol.toUpperCase()}</p>
          </div>
          <Badge
            variant="outline"
            className="border-white/15 text-white/60 tabular-nums"
          >
            #{coin.market_cap_rank}
          </Badge>
        </div>

        <p className="text-3xl font-semibold tracking-tight tabular-nums">
          {formatPrice(coin.current_price)}
        </p>

        <div className="flex items-end justify-between">
          <Badge
            variant="outline"
            className={`gap-1 tabular-nums ${
              isUp
                ? "border-emerald-400/25 bg-emerald-400/10 text-emerald-400"
                : "border-rose-400/25 bg-rose-400/10 text-rose-400"
            }`}
          >
            {isUp ? (
              <ArrowUpRight className="size-3.5" />
            ) : (
              <ArrowDownRight className="size-3.5" />
            )}
            {Math.abs(change).toFixed(2)}%
          </Badge>

          <div className="text-right">
            <p className="text-xs text-white/40">Market cap</p>
            <p className="text-sm font-medium tabular-nums text-white/80">
              {formatCap(coin.market_cap)}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CoinCard;
