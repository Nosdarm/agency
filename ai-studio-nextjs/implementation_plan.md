# Sales Deck Content Update Plan

## Goal Description
Update the sales deck presentation with 5 specific slides provided by the user, focusing on a "Launchpad" package and a case study for "Forch".

## Proposed Changes

### Content Update
#### [MODIFY] [slides-data.tsx](file:///c:/dev/agency/ai-studio-nextjs/app/deck/slides-data.tsx)
- Replace the existing 7 slides with the 5 new slides requested:
    1.  **The Hook**: "Your MVP. Live. In 30 Days."
    2.  **The Pain**: Comparison (Traditional vs Us).
    3.  **The Proof**: Forch Case Study (using `Forch.jpg`).
    4.  **The Stack**: AI Speed + Senior Quality.
    5.  **The Offer**: Launchpad Package ($5,900).

## Verification Plan

### Manual Verification
- **Browser Test**: Open the deck page (`/deck`) in the browser.
- **Visual Check**:
    - Verify all 5 slides are present and in the correct order.
    - Check that `Forch.jpg` loads correctly on Slide 3.
    - Verify the text content matches the user's request exactly.
    - Check responsiveness and layout.
