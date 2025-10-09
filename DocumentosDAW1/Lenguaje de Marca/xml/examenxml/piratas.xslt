<?xml version="1.0" encoding="UTF-8" ?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body>
                <div style="display: flex; flex-direction: column; align-items: center;">
                    <button style="border: 1px solid black; background-color: red; text-align: center; padding: 5px; color: white; border-radius: 10px; margin: 20px; width: 150px;">Piratas</button>
                    <div style="padding: 0 50px 20px; border: 1px solid black; border-radius: 50px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px; justify-items: center;">
                        <div style="display: flex; flex-direction: column;">
                            <button style="border: 1px solid black; background-color: blue; text-align: center; padding: 5px; color: white; border-radius: 10px; margin: 20px; width: 200px;">Actor</button>
                            <div style="border: 4px solid black; padding: 2px; display: flex; flex-direction: column;">
                                <xsl:for-each select="piratas/pirata/datos_actor">
                                    <span style="font-weight: bold;">Nombre completo: <span style="font-weight: normal;"><xsl:value-of select="nombre"/></span><span style="font-weight: normal;">‎ <xsl:value-of select="apellidos"/></span></span>
                                    <span style="font-weight: bold;">Sexo: <span style="font-weight: normal;"><xsl:value-of select="sexo"/></span></span>
                                    <span style="font-weight: bold;">Fecha nacimiento: <span style="font-weight: normal;"><xsl:value-of select="nacimiento"/></span></span>
                                </xsl:for-each>
                            </div>
                        </div>
                        <div style="display: flex; flex-direction: column;">
                            <button style="border: 1px solid black; background-color: blue; text-align: center; padding: 5px; color: white; border-radius: 10px; margin: 20px; width: 200px;">Jack Sparrow</button>
                            <img style="width: 70%; align-self: center; border: 3px solid black;">
                                <xsl:attribute name="src">
                                    <xsl:for-each select="piratas/pirata">
                                        <xsl:value-of select="@imagen"/>
                                    </xsl:for-each>
                                </xsl:attribute>
                            </img>
                        </div>
                        <div style="display: flex; flex-direction: column; align-items: center;">
                            <button style="border: 1px solid black; background-color: blue; text-align: center; padding: 5px; color: white; border-radius: 10px; margin: 20px; width: 200px;">Películas</button>
                            <table border="1" style="text-align: center; width: 500px; height: 150px;">
                                <tr style="background-color: #ffff008a;">
                                    <th>TÍTULO</th>
                                    <th>SAGA</th>
                                </tr>
                                <xsl:for-each select="piratas/pirata/peliculas/pelicula/datos">
                                    <tr>
                                        <th><xsl:value-of select="titulo"/></th> <!-- He puesto th en vez de td porque en la imagen del examen salen todos los textos de las tablas en negrita -->
                                        <th><xsl:value-of select="saga"/></th>
                                    </tr>
                                </xsl:for-each>
                            </table>
                        </div>
                        <div style="display: flex; flex-direction: column; align-items: center;">
                            <button style="border: 1px solid black; background-color: blue; text-align: center; padding: 5px; color: white; border-radius: 10px; margin: 20px; width: 200px;">Roles</button>
                            <table border="1" style="text-align: center; width: 400px; height: 150px;">
                                <tr style="background-color: #ffff008a;">
                                    <th>TIPO</th>
                                    <th>BARCO</th>
                                </tr>
                                <xsl:for-each select="piratas/pirata/roles/rol">
                                    <tr>
                                        <th><xsl:value-of select="tipo_rol"/></th>
                                        <th><xsl:value-of select="barco"/></th>
                                    </tr>
                                </xsl:for-each>
                            </table>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>