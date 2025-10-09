<?xml version="1.0" encoding="UTF-8" ?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <style>
                    table {
                        border-collapse: collapse;
                        margin: 0 auto;
                        table-layout: fixed;
                        width: 200px;
                    }
                    
                    th, td {
                        border: 1px solid black;
                        padding: 10px;
                        text-align: left;
                        overflow: hidden;
                        word-wrap: break-word;
                    }
                    
                    th {
                        font-weight: normal;
                    }
                    
                    span {
                        font-size: 25px;
                    }
                </style>
            </head>
            <body>
            <div style="display: flex; flex-direction: column; align-items: center;">
                <button style="border: 1px solid black; background-color: red; text-align: center; padding: 5px; color: white; margin: 20px; width: 100px; height: 35px; border-radius: 10px;">Pokédex</button>
                <div style="padding: 0px 30px 30px;border: 1px solid black;border-radius: 80px;display: grid;grid-template-columns: 1fr 1fr 1fr;column-gap: 80px;justify-items: center;align-items: center;">
                    <div style="display: flex; flex-direction: column; align-items: center; width: 100%;">
                        <h1 style="text-align: center; font-weight: normal;">1  Bulbasaur</h1>
                        <img style="border: 3px solid black; width: 100%; height: 100%;">
                            <xsl:attribute name="src">
                                <xsl:for-each select="pokedex/pokemon">
                                    <xsl:value-of select="@url_imagen"/>
                                </xsl:for-each>
                            </xsl:attribute>
                        </img>
                    </div>
                    <div style="display: flex; flex-direction: column; align-items: center; height: 100%;">
                        <button style="border: 1px solid black; background-color: blue; text-align: center; padding: 5px; color: white; margin: 20px; width: 200px; border-radius: 10px;">Datos generales</button>
                        <div style="border: 4px solid black; padding: 10px; display: flex; flex-direction: column; height: 60%;width: 100%;">
                            <xsl:for-each select="pokedex/pokemon/datos_generales">
                                <span style="font-weight: bold;">Altura: <span style="font-weight: normal;"><xsl:value-of select="altura"/></span></span>
                                <span style="font-weight: bold;">Peso: <span style="font-weight: normal;"><xsl:value-of select="peso"/></span></span>
                                <span style="font-weight: bold;">Sexo: <span style="font-weight: normal;"><xsl:value-of select="sexo"/></span></span>
                                <span style="font-weight: bold;">Categoría: <span style="font-weight: normal;"><xsl:value-of select="categoria"/></span></span>
                                <span style="font-weight: bold;">Habilidad: <span style="font-weight: normal;"><xsl:value-of select="habilidad"/></span></span>
                            </xsl:for-each>
                        </div>
                    </div>
                    <div style="display: flex; flex-direction: column; align-items: center;">
                        <button style="border: 1px solid black; background-color: blue; text-align: center; padding: 5px; color: white; margin: 20px; width: 200px; border-radius: 10px;">Stats Base</button>
                        <table border="1">
                            <tr>
                                <th>PS</th>
                                <xsl:for-each select="pokedex/pokemon/stats_base">
                                    <td>
                                        <xsl:value-of select="ps"/>
                                    </td>
                                </xsl:for-each>
                            </tr>
                            <tr>
                                <th>AT</th>
                                <xsl:for-each select="pokedex/pokemon/stats_base">
                                    <td>
                                        <xsl:value-of select="at"/>
                                    </td>
                                </xsl:for-each>
                            </tr>
                            <tr>
                                <th>DEF</th>
                                <xsl:for-each select="pokedex/pokemon/stats_base">
                                    <td>
                                        <xsl:value-of select="def"/>
                                    </td>
                                </xsl:for-each>
                            </tr>
                            <tr>
                                <th>S.AT</th>
                                <xsl:for-each select="pokedex/pokemon/stats_base">
                                    <td>
                                        <xsl:value-of select="spat"/>
                                    </td>
                                </xsl:for-each>
                            </tr>
                            <tr>
                                <th>S.DEF</th>
                                <xsl:for-each select="pokedex/pokemon/stats_base">
                                    <td>
                                        <xsl:value-of select="spde"/>
                                    </td>
                                </xsl:for-each>
                            </tr>
                            <tr>
                                <th>SPD</th>
                                <xsl:for-each select="pokedex/pokemon/stats_base">
                                    <td>
                                        <xsl:value-of select="vel"/>
                                    </td>
                                </xsl:for-each>
                            </tr>
                        </table>
                    </div>
                    <div style="display: flex; flex-direction: column; align-items: center;">
                        <button style="border: 1px solid black; background-color: blue; text-align: center; padding: 5px; color: white; margin: 20px; width: 200px; border-radius: 10px;">Debilidades</button>
                        <table border="1">
                            <xsl:for-each select="pokedex/pokemon/tipologia/debilidades/debilidad">
                                <tr>
                                    <th style="text-transform: uppercase;"><xsl:value-of select="tipo"/></th>
                                    <td><xsl:value-of select="efectividad"/></td>
                                </tr>
                            </xsl:for-each>
                        </table>
                    </div>
                    <div style="display: flex; flex-direction: column; align-items: center;">
                        <button style="border: 1px solid black; background-color: blue; text-align: center; padding: 5px; color: white; margin: 20px; width: 200px; border-radius: 10px;">Fortalezas</button>
                        <table border="1">
                            <xsl:for-each select="pokedex/pokemon/tipologia/fortalezas/fortaleza">
                                <tr>
                                    <th style="text-transform: uppercase;"><xsl:value-of select="tipo"/></th>
                                    <td><xsl:value-of select="efectividad"/></td>
                                </tr>
                            </xsl:for-each>
                        </table>
                    </div>
                    <div style="display: flex; flex-direction: column; align-items: center;">
                        <button style="border: 1px solid black; background-color: blue; text-align: center; padding: 5px; color: white; margin: 20px; width: 200px; border-radius: 10px;">N. Evoluciones</button>
                        <div style="border: 2px solid black; padding: 10px 30px; font-size: 20px;">
                            <xsl:value-of select="pokedex/pokemon/evoluciones/evolución/num_pokedex"/>
                        </div>
                    </div>
                </div>
            </div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>