import { H2 } from "./FirstContainer";
import { Buttons, StyledButton, Par } from "./HeaderComponent";


export default function ThirdComponent() {
    return (
        <section>
            <H2>Clipboard for iOS and Mac OS</H2>
            <Par>
                Available for free on the App Store. Download for Mac or iOS, sync with iCloud 
                and you're ready to start adding to your clipboard.
            </Par>
            <Buttons>
                <StyledButton otherColor>Download for iOS</StyledButton>
                <StyledButton>Download for Mac</StyledButton>
            </Buttons>
        </section>
    )
}