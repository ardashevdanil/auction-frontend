export interface ItemCardProps {
  title: string
  currency: "RUB" | "USD" | "EUR"
  start_bet: number
  last_bet: number
  bet_count: number
  step_min: number
  start_date: number
  end_date: number
  redemption_value?: number
  image_url: string
}
