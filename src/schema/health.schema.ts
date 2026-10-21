import { z as zod } from "zod";

const healthSchema = zod.object({
    "status": zod.literal("ok")
});

export default healthSchema;