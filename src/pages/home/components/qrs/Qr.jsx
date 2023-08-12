import React from "react";
import "./Qr.scss";
import { QRCode, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
export default function Qr({ url, title, orderId }) {
    const antIcon = (
        <LoadingOutlined
            style={{
                fontSize: 24,
            }}
            spin
        />
    );
    return (
        <div className="qr_modal">
            <h2>{title}</h2>
            {/* <h2>{orderId}</h2> */}
            <QRCode
                value={url}
                icon="https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-ZaloPay-Square.png"
            />
            <Spin indicator={antIcon} />
        </div>
    );
}