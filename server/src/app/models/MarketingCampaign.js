import { Schema, model } from "mongoose";

const MarketingCampaignSchema = new Schema({
    campaignId: String,
    startDate: String,
    endDate: String,
    roi: Number
});

export const MarketingCampaign = model('MarketingCampaign', MarketingCampaignSchema);
