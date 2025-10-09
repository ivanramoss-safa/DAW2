<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:fo="http://www.w3.org/1999/XSL/Format">

    <xsl:template match="/">
        <fo:root>
            <fo:layout-master-set>
                <fo:simple-page-master master-name="pagina-entrada" page-height="15cm" page-width="21cm" margin="0.5cm">
                    <fo:region-body margin="0.5cm"/>
                </fo:simple-page-master>
            </fo:layout-master-set>
            <fo:page-sequence master-reference="pagina-entrada">
                <fo:flow flow-name="xsl-region-body">
                    <fo:block border="2pt solid black" padding="8pt" width="100%" background-color="#f5f5f5">
                        <fo:block font-size="14pt" font-weight="bold" font-family="Arial" margin-bottom="8pt" border-bottom="1pt solid black" padding-bottom="5pt">
                            <fo:block text-align="left" margin-bottom="5pt">Entrada para el evento: FSO - GIRA FÉNIX</fo:block>
                            <fo:block text-align="right">Código: 12114TG4314HJ13413</fo:block>
                        </fo:block>
                        <fo:table table-layout="fixed" width="100%">
                            <fo:table-column column-width="30%"/>
                            <fo:table-column column-width="70%"/>
                            <fo:table-body>
                                <fo:table-row>
                                    <fo:table-cell padding="5pt" margin="5pt">
                                        <fo:block>
                                            <fo:external-graphic src="file:///C:/Users/ivanr/OneDrive/Documentos/Lenguaje de Marca/xml/xml-xslt-fo-pdf/nueva-gira-fenix-cartel.jpg" content-width="scale-to-fit" content-height="scale-to-fit" width="100%" height="8cm"/>
                                        </fo:block>
                                    </fo:table-cell>
                                    <fo:table-cell padding="5pt" margin="5pt">
                                        <fo:block>
                                            <fo:block border="1pt solid black" padding="8pt" background-color="#e6f3fa" margin-bottom="10pt">
                                                <fo:block font-size="12pt" font-weight="bold" font-family="Arial" text-align="center" background-color="#b3d9ff" padding="5pt" margin-bottom="10pt">
                                                    Datos del Evento
                                                </fo:block>
                                                <fo:block margin-top="5pt">
                                                    <fo:table table-layout="fixed" width="100%">
                                                        <fo:table-column column-width="40%"/>
                                                        <fo:table-column column-width="60%"/>
                                                        <fo:table-body>
                                                            <fo:table-row>
                                                                <fo:table-cell padding="4pt">
                                                                    <fo:block font-weight="bold" font-family="Arial" font-size="10pt" color="#333333">Fecha:</fo:block>
                                                                </fo:table-cell>
                                                                <fo:table-cell padding="4pt">
                                                                    <fo:block font-size="10pt">25/03/2022</fo:block>
                                                                </fo:table-cell>
                                                            </fo:table-row>
                                                            <fo:table-row>
                                                                <fo:table-cell padding="4pt">
                                                                    <fo:block font-weight="bold" font-family="Arial" font-size="10pt" color="#333333">Lugar:</fo:block>
                                                                </fo:table-cell>
                                                                <fo:table-cell padding="4pt">
                                                                    <fo:block font-size="10pt">Palacio de Congresos</fo:block>
                                                                </fo:table-cell>
                                                            </fo:table-row>
                                                            <fo:table-row>
                                                                <fo:table-cell padding="4pt">
                                                                    <fo:block font-weight="bold" font-family="Arial" font-size="10pt" color="#333333">Ciudad:</fo:block>
                                                                </fo:table-cell>
                                                                <fo:table-cell padding="4pt">
                                                                    <fo:block font-size="10pt">Sevilla</fo:block>
                                                                </fo:table-cell>
                                                            </fo:table-row>
                                                            <fo:table-row>
                                                                <fo:table-cell padding="4pt">
                                                                    <fo:block font-weight="bold" font-family="Arial" font-size="10pt" color="#333333">Precio:</fo:block>
                                                                </fo:table-cell>
                                                                <fo:table-cell padding="4pt">
                                                                    <fo:block font-size="10pt">60,00 €</fo:block>
                                                                </fo:table-cell>
                                                            </fo:table-row>
                                                        </fo:table-body>
                                                    </fo:table>
                                                </fo:block>
                                            </fo:block>
                                            <fo:block text-align="center">
                                                <fo:instream-foreign-object>
                                                    <barcode:barcode xmlns:barcode="http://barcode4j.krysalis.org/ns" message="&lt;D1&gt;950&gt;1234567890&lt;3&lt;10&gt;L9390&lt;3&lt;37&gt;220">
                                                        <barcode:code128>
                                                            <barcode:height>12mm</barcode:height>
                                                            <barcode:module-width>0.25mm</barcode:module-width>
                                                        </barcode:code128>
                                                    </barcode:barcode>
                                                </fo:instream-foreign-object>
                                            </fo:block>
                                        </fo:block>
                                    </fo:table-cell>
                                </fo:table-row>
                            </fo:table-body>
                        </fo:table>
                    </fo:block>
                </fo:flow>
            </fo:page-sequence>
        </fo:root>
    </xsl:template>
</xsl:stylesheet>