import { Dialog } from "primereact/dialog"

export const PrimeDialog = ({ visible, onHide, header, style, footer, maximizable, content }) => {
    return (
        <Dialog
            visible={visible}
            onHide={onHide}
            header={header}
            modal
            style={style}
            maximizable={maximizable || true}
            footer={footer}
        >
            {content}
        </Dialog>
    )
}