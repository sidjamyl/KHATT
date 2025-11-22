import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  console.log('📧 [API Route] Réception de la requête...');
  
  try {
    console.log('🔍 [API Route] Lecture du body...');
    const body = await request.json();
    console.log('📦 [API Route] Body reçu:', body);
    
    const { fullName, email, phoneNumber, businessName, socialMedia } = body;

    // Validation des champs requis
    if (!fullName || !email || !phoneNumber) {
      console.error('❌ [API Route] Validation échouée - Champs manquants');
      return NextResponse.json(
        { error: 'Tous les champs requis doivent être remplis' },
        { status: 400 }
      );
    }
    
    console.log('✅ [API Route] Validation OK');
    console.log('🔑 [API Route] Clé API Resend présente:', !!process.env.RESEND_API_KEY);
    console.log('🔑 [API Route] Début clé:', process.env.RESEND_API_KEY?.substring(0, 10) + '...');

    // Envoyer l'email via Resend
    console.log('📨 [API Route] Tentative d\'envoi de l\'email...');
    const data = await resend.emails.send({
      from: 'KHATT Card Request <onboarding@resend.dev>', // Changez ceci après vérification du domaine
      to: ['nj_sid@esi.dz'],
      subject: `🎴 Nouvelle demande de carte - ${fullName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { 
              font-family: Arial, sans-serif; 
              line-height: 1.6; 
              color: #333; 
              margin: 0;
              padding: 0;
              background-color: #f4f4f4;
            }
            .container { 
              max-width: 600px; 
              margin: 20px auto; 
              background: white;
              border-radius: 10px;
              overflow: hidden;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            .header { 
              background: linear-gradient(135deg, #F06A2A 0%, #ff8c42 100%); 
              color: white; 
              padding: 30px 20px;
              text-align: center;
            }
            .header h2 {
              margin: 0;
              font-size: 24px;
            }
            .content { 
              padding: 30px 20px;
            }
            .intro {
              margin-bottom: 25px;
              color: #555;
              font-size: 16px;
            }
            .field { 
              margin: 15px 0; 
              padding: 15px; 
              background: #f9f9f9; 
              border-left: 4px solid #F06A2A;
              border-radius: 4px;
            }
            .label { 
              font-weight: bold; 
              color: #F06A2A;
              font-size: 14px;
              margin-bottom: 5px;
            }
            .value { 
              margin-top: 5px;
              color: #333;
              font-size: 15px;
              word-wrap: break-word;
            }
            .footer {
              padding: 20px;
              text-align: center;
              background: #f9f9f9;
              color: #666;
              font-size: 13px;
              border-top: 1px solid #e0e0e0;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>🎴 Nouvelle Demande de Carte</h2>
            </div>
            <div class="content">
              <p class="intro">Vous avez reçu une nouvelle demande de carte personnalisée :</p>
              
              <div class="field">
                <div class="label">👤 Nom Complet</div>
                <div class="value">${fullName}</div>
              </div>
              
              <div class="field">
                <div class="label">📧 Email</div>
                <div class="value"><a href="mailto:${email}" style="color: #F06A2A; text-decoration: none;">${email}</a></div>
              </div>
              
              <div class="field">
                <div class="label">📱 Téléphone</div>
                <div class="value"><a href="tel:${phoneNumber}" style="color: #F06A2A; text-decoration: none;">${phoneNumber}</a></div>
              </div>
              
              <div class="field">
                <div class="label">🏢 Nom de l'Entreprise</div>
                <div class="value">${businessName || 'Non renseigné'}</div>
              </div>
              
              <div class="field">
                <div class="label">🔗 Réseau Social</div>
                <div class="value">${socialMedia ? `<a href="${socialMedia}" style="color: #F06A2A; text-decoration: none;" target="_blank">${socialMedia}</a>` : 'Non renseigné'}</div>
              </div>
            </div>
            <div class="footer">
              <p>Cet email a été envoyé automatiquement depuis le formulaire de demande de carte KHATT.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log('✅ [API Route] Email envoyé avec succès!');
    console.log('📊 [API Route] Données Resend:', data);
    
    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error: any) {
    console.error('❌ [API Route] ERREUR lors de l\'envoi:');
    console.error('Type d\'erreur:', error?.constructor?.name);
    console.error('Message:', error?.message);
    console.error('Stack:', error?.stack);
    console.error('Détails complets:', JSON.stringify(error, null, 2));
    
    return NextResponse.json(
      { 
        error: 'Erreur lors de l\'envoi de l\'email',
        details: error?.message || 'Erreur inconnue'
      },
      { status: 500 }
    );
  }
}
